import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { SubscriptionBanner } from '../components/SubscriptionBanner';
import { LLMProviders } from '../components/LLMProviders';

export function SettingsPage(): React.JSX.Element {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="space-y-6">
              {/* Subscription Banner */}
              <SubscriptionBanner />

              {/* LLM Providers */}
              <LLMProviders />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
