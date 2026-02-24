import { useState } from "react";
import { Sidebar } from "src/components/Sidebar";
import { Header } from "src/components/Header";
import { SelectProviderModal } from "src/components/modals/SelectProviderModal";
import { ConnectProviderModal } from "src/components/modals/ConnectProviderModal";
import { SubscriptionModal } from "src/components/modals/SubscriptionModal";
import { EditConnectionModal } from "src/components/modals/EditConnectionModal";
import { DisconnectModal } from "src/components/modals/DisconnectModal";
import "./App.css";

/**
 * Main application component
 * Prototype page with sidebar, header, and modal demonstrations
 */
function App() {
  // Modal states
  const [selectProviderOpen, setSelectProviderOpen] = useState(false);
  const [connectProviderOpen, setConnectProviderOpen] = useState(false);
  const [subscriptionOpen, setSubscriptionOpen] = useState(false);
  const [editConnectionOpen, setEditConnectionOpen] = useState(false);
  const [disconnectOpen, setDisconnectOpen] = useState(false);

  // Selected provider for connection flow
  const [selectedProvider, setSelectedProvider] = useState('');

  // Handle provider selection (Step 1 -> Step 2)
  const handleSelectProvider = (provider: string) => {
    setSelectedProvider(provider);
    setSelectProviderOpen(false);
    setConnectProviderOpen(true);
  };

  // Handle back from Step 2 -> Step 1
  const handleBackToSelect = () => {
    setConnectProviderOpen(false);
    setSelectProviderOpen(true);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">LLM Providers</h2>
            <p className="text-gray-600 mb-8">
              Demo page for testing modal components. Click buttons below to open each modal.
            </p>

            {/* Demo buttons */}
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Provider Connection Flow
                </h3>
                <button
                  onClick={() => setSelectProviderOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
                >
                  🔗 Select LLM Provider (Step 1)
                </button>
                <p className="mt-2 text-sm text-gray-500">
                  Opens the provider selection modal. Selecting a provider will automatically open Step 2.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Subscription Management
                </h3>
                <button
                  onClick={() => setSubscriptionOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
                >
                  💳 View Subscription Plans
                </button>
                <p className="mt-2 text-sm text-gray-500">
                  Opens the subscription tier selection modal with Free, Pro, and Custom plans.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Manage Existing Connection
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setEditConnectionOpen(true)}
                    className="w-full sm:w-auto px-6 py-3 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
                  >
                    ✏️ Edit Connection
                  </button>
                  <button
                    onClick={() => setDisconnectOpen(true)}
                    className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                  >
                    🗑️ Disconnect Provider
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Edit connection details or disconnect an existing provider.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      <SelectProviderModal
        open={selectProviderOpen}
        onOpenChange={setSelectProviderOpen}
        onSelectProvider={handleSelectProvider}
      />

      <ConnectProviderModal
        open={connectProviderOpen}
        onOpenChange={setConnectProviderOpen}
        provider={selectedProvider}
        onBack={handleBackToSelect}
      />

      <SubscriptionModal
        open={subscriptionOpen}
        onOpenChange={setSubscriptionOpen}
      />

      <EditConnectionModal
        open={editConnectionOpen}
        onOpenChange={setEditConnectionOpen}
      />

      <DisconnectModal
        open={disconnectOpen}
        onOpenChange={setDisconnectOpen}
      />
    </div>
  );
}

export default App;
