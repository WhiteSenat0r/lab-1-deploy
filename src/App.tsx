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
        <main className="flex-1 p-6 overflow-auto bg-gray-50">
          {/* Breadcrumb */}
          <div className="mb-4">
            <div className="text-xs text-gray-500">
              Screen / Settings / LLM Providers
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6 overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200 px-6">
              <div className="flex gap-6">
                <button className="px-1 py-3 border-b-2 border-gray-900 text-sm font-normal text-gray-900">
                  LLM Providers
                </button>
                <button className="px-1 py-3 border-b-2 border-transparent text-sm font-normal text-gray-600 hover:text-gray-900">
                  AI Configuration
                </button>
                <button className="px-1 py-3 border-b-2 border-transparent text-sm font-normal text-gray-600 hover:text-gray-900">
                  Notifications
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-base font-semibold text-gray-900 mb-1">Beezi Free</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">0 / 1 connections</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Your current plan allows one connected LLM provider. Upgrade to connect more.
                  </p>
                </div>
                <button
                  onClick={() => setSubscriptionOpen(true)}
                  className="px-4 py-2 bg-gray-900 text-white text-sm font-normal rounded-md hover:bg-gray-800 transition-colors"
                >
                  Upgrade plan
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-center text-base font-semibold text-gray-900 mb-2">
                  No connected LLM providers yet
                </h3>
                <p className="text-center text-sm text-gray-500 mb-4">
                  Connect your first provider by selecting one from the options below.
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => setSelectProviderOpen(true)}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-normal rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <span>+</span> Connect account
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Section */}
          <div className="max-w-5xl">
            <h2 className="text-base font-semibold text-gray-700 mb-3">Demo Controls</h2>
            <p className="text-gray-500 text-sm mb-4">
              Testing controls for modal components
            </p>

            {/* Demo buttons */}
            <div className="space-y-4">
              <div className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Provider Connection Flow
                </h3>
                <button
                  onClick={() => setSelectProviderOpen(true)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-purple-600 text-white font-normal text-sm rounded-md hover:bg-purple-700 transition-colors"
                >
                  🔗 Select LLM Provider (Step 1)
                </button>
                <p className="mt-2 text-sm text-gray-500">
                  Opens the provider selection modal. Selecting a provider will automatically open Step 2.
                </p>
              </div>

              <div className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Subscription Management
                </h3>
                <button
                  onClick={() => setSubscriptionOpen(true)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-purple-600 text-white font-normal text-sm rounded-md hover:bg-purple-700 transition-colors"
                >
                  💳 View Subscription Plans
                </button>
                <p className="mt-2 text-sm text-gray-500">
                  Opens the subscription tier selection modal with Free, Pro, and Custom plans.
                </p>
              </div>

              <div className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Manage Existing Connection
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setEditConnectionOpen(true)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-gray-600 text-white font-normal text-sm rounded-md hover:bg-gray-700 transition-colors"
                  >
                    ✏️ Edit Connection
                  </button>
                  <button
                    onClick={() => setDisconnectOpen(true)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-red-600 text-white font-normal text-sm rounded-md hover:bg-red-700 transition-colors"
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
