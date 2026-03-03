import React from 'react';
import { Crown } from 'lucide-react';

export function SubscriptionBanner(): React.JSX.Element {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <Crown className="w-6 h-6 text-[#6366F1]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-1">
              Current Subscription Tier
            </h3>
            <p className="text-sm text-[#64748B] mb-3">
              You are currently on the <span className="font-medium text-[#6366F1]">Free Plan</span>
            </p>
            <p className="text-sm text-[#64748B]">
              Upgrade to unlock more features and increase your usage limits.
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-[#6366F1] text-white text-sm font-medium rounded-lg hover:bg-[#4F46E5] transition-colors">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
}
