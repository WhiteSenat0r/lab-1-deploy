import { cn } from "../../lib/utils";
import { Crown, ArrowUpRight } from "lucide-react";

interface SubscriptionTierProps {
  className?: string;
}

/**
 * Subscription Tier block component
 *
 * Displays the current subscription plan and upgrade options
 */
export function SubscriptionTier({ className }: SubscriptionTierProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 shadow-sm",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg">
            <Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Current Subscription
            </h3>
            <p className="text-sm text-muted-foreground">
              Manage your plan and billing
            </p>
          </div>
        </div>
      </div>

      {/* Subscription details */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div>
            <p className="text-sm font-medium text-foreground">Free Plan</p>
            <p className="text-xs text-muted-foreground mt-1">
              Limited features and usage
            </p>
          </div>
          <span className="px-3 py-1 bg-background border border-border text-xs font-medium rounded-full">
            Active
          </span>
        </div>

        {/* Usage stats */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">API Calls</p>
            <p className="text-lg font-semibold text-foreground mt-1">
              450 / 1,000
            </p>
          </div>
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">Team Members</p>
            <p className="text-lg font-semibold text-foreground mt-1">
              2 / 5
            </p>
          </div>
        </div>

        {/* Upgrade CTA */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors mt-4">
          <span>Upgrade to Pro</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
