import React from 'react';
import { Plus, CheckCircle2 } from 'lucide-react';

interface Provider {
  id: string;
  name: string;
  connected: boolean;
  logo: string;
}

const providers: Provider[] = [
  { id: 'openai', name: 'OpenAI', connected: true, logo: '🤖' },
  { id: 'anthropic', name: 'Anthropic', connected: true, logo: '🧠' },
  { id: 'google', name: 'Google AI', connected: false, logo: '🔍' },
  { id: 'cohere', name: 'Cohere', connected: false, logo: '📊' },
];

export function LLMProviders(): React.JSX.Element {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#0F172A] mb-1">
            Connected LLM Providers
          </h3>
          <p className="text-sm text-[#64748B]">
            Manage your AI model provider integrations
          </p>
        </div>
        <button className="px-4 py-2 bg-[#6366F1] text-white text-sm font-medium rounded-lg hover:bg-[#4F46E5] transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Provider
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}

interface ProviderCardProps {
  provider: Provider;
}

function ProviderCard({ provider }: ProviderCardProps): React.JSX.Element {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
            {provider.logo}
          </div>
          <div>
            <h4 className="font-medium text-[#0F172A]">{provider.name}</h4>
            <div className="flex items-center gap-1 mt-1">
              {provider.connected ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600 font-medium">Connected</span>
                </>
              ) : (
                <span className="text-xs text-[#64748B]">Not connected</span>
              )}
            </div>
          </div>
        </div>
        <button className="text-xs text-[#6366F1] hover:text-[#4F46E5] font-medium">
          {provider.connected ? 'Configure' : 'Connect'}
        </button>
      </div>
    </div>
  );
}
