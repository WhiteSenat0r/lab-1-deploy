import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, CheckIcon } from '@radix-ui/react-icons';
import { FREE_PLAN_FEATURES, PRO_PLAN_FEATURES, CUSTOM_PLAN_FEATURES } from './subscription.constants';

interface SubscriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Modal for selecting subscription tier
 * Displays Free, Pro, and Custom plans with features
 */
export function SubscriptionModal({ open, onOpenChange }: SubscriptionModalProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl shadow-lg w-[920px] max-h-[85vh] overflow-y-auto focus:outline-none">
          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <Dialog.Title className="text-xl font-semibold text-gray-900">
                Upgrade your plan
              </Dialog.Title>
              <Dialog.Close className="text-gray-400 hover:text-gray-600 transition-colors">
                <Cross2Icon className="w-4 h-4" />
              </Dialog.Close>
            </div>

            {/* Billing period toggle */}
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex rounded-lg border border-gray-200 p-0.5 bg-gray-50">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-4 py-1.5 text-sm font-normal rounded-md transition-colors ${
                    billingPeriod === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-4 py-1.5 text-sm font-normal rounded-md transition-colors ${
                    billingPeriod === 'annual'
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual
                  <span className="ml-1.5 text-xs bg-green-500 text-white px-1.5 py-0.5 rounded">
                    Save 25%
                  </span>
                </button>
              </div>
              <span className="text-sm text-gray-500 ml-auto flex items-center gap-1">
                Integrations available on all plans 🚀📊💬📋🏗️📈🛡️
              </span>
            </div>

            {/* Plans grid */}
            <div className="grid grid-cols-3 gap-5">
              {/* Free Plan */}
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Free</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-900">$0</span>
                  <span className="text-sm text-gray-500"> / user / month</span>
                </div>
                <p className="text-sm text-gray-500 mb-4 min-h-[40px]">
                  Explore AI workflows with basic setup.
                </p>
                <button className="w-full py-2 px-4 border border-gray-300 text-sm font-normal text-gray-700 rounded-md hover:bg-gray-50 transition-colors mb-5">
                  Current
                </button>
                <div className="space-y-2.5">
                  {FREE_PLAN_FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-snug whitespace-pre-line">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Plan */}
              <div className="border-2 border-purple-600 rounded-lg p-5 relative bg-gradient-to-b from-purple-50/30 to-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pro</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-900">$40</span>
                  <span className="text-sm text-gray-500"> / user / month</span>
                </div>
                <p className="text-sm text-gray-500 mb-4 min-h-[40px]">
                  Run AI reliably across daily workflows.
                </p>
                <button className="w-full py-2 px-4 bg-purple-600 text-sm font-normal text-white rounded-md hover:bg-purple-700 transition-colors mb-5">
                  Upgrade
                </button>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                    EVERYTHING IN FREE
                  </span>
                </div>
                <div className="space-y-2.5">
                  {PRO_PLAN_FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-snug whitespace-pre-line">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Plan */}
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom</h3>
                <div className="mb-3">
                  <span className="text-lg font-semibold text-gray-900">Custom prise</span>
                </div>
                <p className="text-sm text-gray-500 mb-4 min-h-[40px]">
                  Scale AI securely across teams.
                </p>
                <button className="w-full py-2 px-4 border border-gray-300 text-sm font-normal text-gray-700 rounded-md hover:bg-gray-50 transition-colors mb-5">
                  Contact us
                </button>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                    EVERYTHING IN FREE AND PRO
                  </span>
                </div>
                <div className="space-y-2.5">
                  {CUSTOM_PLAN_FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-snug whitespace-pre-line">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
