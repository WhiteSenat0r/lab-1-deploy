import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

interface DisconnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Modal for disconnecting an LLM provider
 * Confirmation dialog with warning message
 */
export function DisconnectModal({ open, onOpenChange }: DisconnectModalProps) {
  const handleDisconnect = () => {
    // Placeholder for disconnect logic
    console.log('Disconnecting provider');
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
              <Dialog.Title className="text-base font-semibold text-gray-900">
                Disconnect Anthropic connection
              </Dialog.Title>
              <Dialog.Close className="text-gray-400 hover:text-gray-600 transition-colors ml-4">
                <Cross2Icon className="w-4 h-4" />
              </Dialog.Close>
            </div>

            {/* Description */}
            <Dialog.Description className="text-sm text-gray-500 mb-6">
              This will disconnect "ConnectionName" and stop all requests using it. You can reconnect it at any time.
            </Dialog.Description>

            {/* Footer */}
            <div className="flex justify-end gap-2">
              <Dialog.Close asChild>
                <button className="px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                  Cancel
                </button>
              </Dialog.Close>
              <button
                onClick={handleDisconnect}
                className="px-4 py-2 text-sm font-normal text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
              >
                Disconnect
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
