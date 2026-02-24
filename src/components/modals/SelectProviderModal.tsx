import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { LLM_PROVIDERS } from './providers.constants';

interface SelectProviderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectProvider: (provider: string) => void;
}

/**
 * Modal for selecting an LLM provider
 * Step 1 of 2 in the provider connection flow
 */
export function SelectProviderModal({ open, onOpenChange, onSelectProvider }: SelectProviderModalProps) {
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
                  Select LLM provider
                </Dialog.Title>
                <Dialog.Description className="text-sm text-gray-600">
                  Choose the provider you want to connect.
                </Dialog.Description>
              </div>
              <Dialog.Close className="text-gray-400 hover:text-gray-600 transition-colors">
                <Cross2Icon className="w-5 h-5" />
              </Dialog.Close>
            </div>

            {/* Progress indicator */}
            <div className="mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-gray-900 rounded"></div>
              <div className="h-1 w-8 bg-gray-200 rounded"></div>
              <span className="text-xs text-gray-500 ml-auto">Step 1 of 2</span>
            </div>

            {/* Provider list */}
            <div className="space-y-2 mb-6">
              {LLM_PROVIDERS.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => onSelectProvider(provider.id)}
                  className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-semibold text-gray-700">
                    {provider.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{provider.name}</span>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3">
              <Dialog.Close asChild>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                  Cancel
                </button>
              </Dialog.Close>
              <button
                disabled
                className="px-4 py-2 text-sm font-medium text-white bg-gray-400 rounded-md cursor-not-allowed"
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
