import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { SubscriptionTier } from "./SubscriptionTier";
import { LLMProviders } from "./LLMProviders";

interface PageLayoutProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Main page layout component
 *
 * Aggregates Sidebar, Header, and content area with subscription tier
 * and LLM providers blocks. Uses a flex layout with fixed-width sidebar.
 */
export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Sidebar - Fixed width, full height */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content area with scroll */}
        <main className="flex-1 overflow-y-auto">
          <div className={cn("container mx-auto p-6 max-w-7xl", className)}>
            {/* Default content blocks */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Subscription Tier block */}
              <div className="lg:col-span-1">
                <SubscriptionTier />
              </div>

              {/* LLM Providers block */}
              <div className="lg:col-span-2">
                <LLMProviders />
              </div>
            </div>

            {/* Additional custom content */}
            {children && (
              <div className="mt-6">
                {children}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
