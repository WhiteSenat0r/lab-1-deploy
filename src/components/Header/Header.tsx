import React from 'react';
import { Bell, Search } from 'lucide-react';

export function Header(): React.JSX.Element {
  return (
    <header className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">Settings</h1>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
        <button
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-sm font-medium">
          U
        </div>
      </div>
    </header>
  );
}
