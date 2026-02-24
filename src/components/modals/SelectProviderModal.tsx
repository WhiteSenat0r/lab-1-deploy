import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { LLM_PROVIDERS } from './providers.constants';

interface SelectProviderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectProvider: (provider: string) => void;
}

// Helper function to get provider icon styling
const getProviderIconStyle = (id: string) => {
  const styles: Record<string, string> = {
    'anthropic': 'bg-gray-900 text-white border-gray-900',
    'google': 'bg-white text-blue-600 border-gray-200',
    'openai': 'bg-white text-gray-900 border-gray-900',
    'microsoft': 'bg-blue-600 text-white border-blue-600',
    'aws-bedrock': 'bg-orange-500 text-white border-orange-500',
  };
  return styles[id] || 'bg-gray-50 text-gray-700 border-gray-200';
};

/**
 * Modal for selecting an LLM provider
 * Step 1 of 2 in the provider connection flow
 */
export function SelectProviderModal({ open, onOpenChange, onSelectProvider }: SelectProviderModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl shadow-[0_0_0_3px_rgba(59,130,246,0.5)] w-[480px] max-h-[85vh] overflow-y-auto focus:outline-none">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <Dialog.Title className="text-base font-semibold text-gray-900 mb-1">
                  Select LLM provider
                </Dialog.Title>
                <Dialog.Description className="text-sm text-gray-500">
                  Choose the provider you want to connect.
                </Dialog.Description>
              </div>
              <Dialog.Close className="text-gray-400 hover:text-gray-600 transition-colors ml-4">
                <Cross2Icon className="w-4 h-4" />
              </Dialog.Close>
            </div>

            {/* Progress indicator */}
            <div className="mb-5 flex items-center gap-1.5">
              <div className="h-0.5 w-12 bg-gray-900 rounded-full"></div>
              <div className="h-0.5 w-12 bg-gray-200 rounded-full"></div>
              <span className="text-xs text-gray-400 ml-auto">Step 1 of 2</span>
            </div>

            {/* Provider list */}
            <div className="space-y-2 mb-6">
              {LLM_PROVIDERS.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => onSelectProvider(provider.id)}
                  className="w-full flex items-center gap-3 p-3.5 border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold border ${getProviderIconStyle(provider.id)}`}>
                    {provider.icon}
                  </div>
                  <span className="text-sm font-normal text-gray-900">{provider.name}</span>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2">
              <Dialog.Close asChild>
                <button className="px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                  Cancel
                </button>
              </Dialog.Close>
              <button
                disabled
                className="px-4 py-2 text-sm font-normal text-white bg-gray-400 rounded-md cursor-not-allowed"
              >
                Select
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
