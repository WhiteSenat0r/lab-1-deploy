import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, EyeOpenIcon, EyeClosedIcon, InfoCircledIcon } from '@radix-ui/react-icons';

interface ConnectProviderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  provider: string;
  onBack: () => void;
}

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
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow-lg w-[500px] max-h-[85vh] overflow-y-auto focus:outline-none">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <Dialog.Title className="text-lg font-semibold text-gray-900 mb-1">
                  Connect LLM provider
                </Dialog.Title>
                <Dialog.Description className="text-sm text-gray-600">
                  Add your credentials to complete the connection.
                </Dialog.Description>
              </div>
              <Dialog.Close className="text-gray-400 hover:text-gray-600 transition-colors">
                <Cross2Icon className="w-5 h-5" />
              </Dialog.Close>
            </div>

            {/* Progress indicator */}
            <div className="mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-gray-900 rounded"></div>
              <div className="h-1 w-8 bg-gray-900 rounded"></div>
              <span className="text-xs text-gray-500 ml-auto">Step 2 of 2</span>
            </div>

            {/* Provider badge */}
            <div className="mb-6 p-3 border border-gray-200 rounded-lg flex items-center gap-3 bg-gray-50">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-sm font-semibold text-gray-700 border border-gray-200">
                AI
              </div>
              <span className="text-sm font-medium text-gray-900">
                {provider === 'anthropic' ? 'Anthropic' : provider}
              </span>
            </div>

            {/* Connection name field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-2 flex items-center gap-1">
                Connection name
                <div className="relative group">
                  <InfoCircledIcon className="w-4 h-4 text-gray-400" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg">
                    Used to identify this provider internally
                  </div>
                </div>
              </label>
              <input
                type="text"
                placeholder="Enter key name"
                value={connectionName}
                onChange={(e) => setConnectionName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* API key field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                API key
              </label>
              <div className="relative">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  placeholder="Enter API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
            <div className="flex justify-end gap-3">
              <button
                onClick={onBack}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleConnect}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
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
