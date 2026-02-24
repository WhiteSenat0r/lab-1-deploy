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
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow-lg w-[900px] max-h-[85vh] overflow-y-auto focus:outline-none">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <Dialog.Title className="text-2xl font-semibold text-gray-900">
                Upgrade your plan
              </Dialog.Title>
              <Dialog.Close className="text-gray-400 hover:text-gray-600 transition-colors">
                <Cross2Icon className="w-5 h-5" />
              </Dialog.Close>
            </div>

            {/* Billing period toggle */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors relative ${
                  billingPeriod === 'annual'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-green-500 text-white px-1.5 py-0.5 rounded">
                  Save 25%
                </span>
              </button>
              <span className="text-sm text-gray-600 ml-auto">
                Integrations available on all plans 🚀📊💬📋🏗️📈🛡️
              </span>
            </div>

            {/* Plans grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Free Plan */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$0</span>
                  <span className="text-sm text-gray-600"> / user / month</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Explore AI workflows with basic setup.
                </p>
                <button className="w-full py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors mb-4">
                  Current
                </button>
                <div className="space-y-2">
                  {FREE_PLAN_FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 whitespace-pre-line">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Plan */}
              <div className="border-2 border-indigo-600 rounded-lg p-6 relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$40</span>
                  <span className="text-sm text-gray-600"> / user / month</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Run AI reliably across daily workflows.
                </p>
                <button className="w-full py-2 px-4 bg-indigo-600 text-sm font-medium text-white rounded-md hover:bg-indigo-700 transition-colors mb-4">
                  Upgrade
                </button>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-indigo-600 uppercase">
                    EVERYTHING IN FREE
                  </span>
                </div>
                <div className="space-y-2">
                  {PRO_PLAN_FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 whitespace-pre-line">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Plan */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom</h3>
                <div className="mb-4">
                  <span className="text-xl font-semibold text-gray-900">Custom prise</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Scale AI securely across teams.
                </p>
                <button className="w-full py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors mb-4">
                  Contact us
                </button>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-indigo-600 uppercase">
                    EVERYTHING IN FREE AND PRO
                  </span>
                </div>
                <div className="space-y-2">
                  {CUSTOM_PLAN_FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 whitespace-pre-line">{feature}</span>
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
