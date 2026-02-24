import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, EyeOpenIcon, EyeClosedIcon, InfoCircledIcon } from '@radix-ui/react-icons';

interface ConnectProviderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  provider: string;
  onBack: () => void;
}

// Helper function to format provider name
const getProviderName = (id: string) => {
  const names: Record<string, string> = {
    'anthropic': 'Anthropic',
    'google': 'Google',
    'openai': 'Open AI',
    'microsoft': 'Microsoft',
    'aws-bedrock': 'AWS Bedrock',
  };
  return names[id] || id;
};

// Helper function to get provider icon
const getProviderIcon = (id: string) => {
  const icons: Record<string, string> = {
    'anthropic': 'A',
    'google': 'G',
    'openai': 'O',
    'microsoft': 'M',
    'aws-bedrock': 'AWS',
  };
  return icons[id] || 'AI';
};

/**
 * Modal for connecting to an LLM provider
 * Step 2 of 2 - form to enter API credentials
 */
export function ConnectProviderModal({ open, onOpenChange, provider, onBack }: ConnectProviderModalProps) {
  const [connectionName, setConnectionName] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);

  const handleConnect = () => {
    // Placeholder for connection logic
    console.log('Connecting with:', { connectionName, apiKey });
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl shadow-lg w-[480px] max-h-[85vh] overflow-y-auto focus:outline-none">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <Dialog.Title className="text-base font-semibold text-gray-900 mb-1">
                  Connect LLM provider
                </Dialog.Title>
                <Dialog.Description className="text-sm text-gray-500">
                  Add your credentials to complete the connection.
                </Dialog.Description>
              </div>
              <Dialog.Close className="text-gray-400 hover:text-gray-600 transition-colors ml-4">
                <Cross2Icon className="w-4 h-4" />
              </Dialog.Close>
            </div>

            {/* Progress indicator */}
            <div className="mb-5 flex items-center gap-1.5">
              <div className="h-0.5 w-12 bg-gray-900 rounded-full"></div>
              <div className="h-0.5 w-12 bg-gray-900 rounded-full"></div>
              <span className="text-xs text-gray-400 ml-auto">Step 2 of 2</span>
            </div>

            {/* Provider badge */}
            <div className="mb-5 p-3.5 border border-gray-200 rounded-md flex items-center gap-3 bg-gray-50">
              <div className="w-7 h-7 bg-gray-900 text-white rounded flex items-center justify-center text-xs font-bold border border-gray-900">
                {getProviderIcon(provider)}
              </div>
              <span className="text-sm font-normal text-gray-900">
                {getProviderName(provider)}
              </span>
            </div>

            {/* Connection name field */}
            <div className="mb-4">
              <label className="block text-sm font-normal text-gray-900 mb-2 flex items-center gap-1.5">
                Connection name
                <div className="relative group">
                  <InfoCircledIcon className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max max-w-[220px] px-3 py-2 bg-gray-900 text-white text-xs rounded-md shadow-lg whitespace-nowrap">
                    Used to identify this provider internally
                  </div>
                </div>
              </label>
              <input
                type="text"
                placeholder="Enter key name"
                value={connectionName}
                onChange={(e) => setConnectionName(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* API key field */}
            <div className="mb-6">
              <label className="block text-sm font-normal text-gray-900 mb-2">
                API key
              </label>
              <div className="relative">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  placeholder="Enter API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showApiKey ? <EyeClosedIcon className="w-4 h-4" /> : <EyeOpenIcon className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2">
              <button
                onClick={onBack}
                className="px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleConnect}
                className="px-4 py-2 text-sm font-normal text-white bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
              >
                Connect
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
