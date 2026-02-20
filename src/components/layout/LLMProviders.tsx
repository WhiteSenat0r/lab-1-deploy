import { cn } from "../../lib/utils";
import { Bot, Check, Plus, ExternalLink } from "lucide-react";
import { Separator } from "../ui/separator";

interface LLMProvidersProps {
  className?: string;
}

interface LLMProvider {
  id: string;
  name: string;
  status: "connected" | "disconnected";
  apiKey?: string;
  lastSync?: string;
}

const MOCK_PROVIDERS: LLMProvider[] = [
  {
    id: "openai",
    name: "OpenAI",
    status: "connected",
    apiKey: "sk-...xyz123",
    lastSync: "2 hours ago",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    status: "connected",
    apiKey: "sk-ant-...abc456",
    lastSync: "1 day ago",
  },
  {
    id: "google",
    name: "Google AI",
    status: "disconnected",
  },
];

/**
 * LLM Provider item component
 */
function LLMProviderItem({ provider }: { provider: LLMProvider }) {
  const isConnected = provider.status === "connected";

  return (
    <div className="flex items-start justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors">
      <div className="flex items-start gap-3 flex-1">
        <div
          className={cn(
            "p-2 rounded-lg",
            isConnected
              ? "bg-green-100 dark:bg-green-900/20"
              : "bg-gray-100 dark:bg-gray-800"
          )}
        >
          <Bot
            className={cn(
              "h-5 w-5",
              isConnected
                ? "text-green-600 dark:text-green-400"
                : "text-gray-400"
            )}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-medium text-foreground">
              {provider.name}
            </h4>
            {isConnected && (
              <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
            )}
          </div>
          {isConnected && provider.apiKey && (
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              {provider.apiKey}
            </p>
          )}
          {isConnected && provider.lastSync && (
            <p className="text-xs text-muted-foreground mt-1">
              Last synced: {provider.lastSync}
            </p>
          )}
          {!isConnected && (
            <p className="text-xs text-muted-foreground mt-1">
              Not connected
            </p>
          )}
        </div>
      </div>

      {/* Action button */}
      <button
        className={cn(
          "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
          isConnected
            ? "text-muted-foreground hover:bg-muted hover:text-foreground"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        {isConnected ? "Manage" : "Connect"}
      </button>
    </div>
  );
}

/**
 * LLM Providers block component
 *
 * Displays connected LLM providers and allows managing connections
 */
export function LLMProviders({ className }: LLMProvidersProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 shadow-sm",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Connected LLM Providers
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your AI model integrations
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary hover:bg-accent rounded-lg transition-colors"
          aria-label="Add new provider"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Add Provider</span>
        </button>
      </div>

      <Separator className="my-4" />

      {/* Providers list */}
      <div className="space-y-2">
        {MOCK_PROVIDERS.map((provider) => (
          <LLMProviderItem key={provider.id} provider={provider} />
        ))}
      </div>

      {/* Footer link */}
      <div className="mt-4 pt-4 border-t border-border">
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <span>View all providers</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
