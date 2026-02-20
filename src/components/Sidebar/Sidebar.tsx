import React from 'react';
import {
  Home,
  LayoutGrid,
  Database,
  Settings,
  FileText
} from 'lucide-react';
import * as Separator from '@radix-ui/react-separator';

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: LayoutGrid, label: 'Applications', path: '/applications' },
  { icon: Database, label: 'Data Sources', path: '/data-sources' },
  { icon: FileText, label: 'Documentation', path: '/documentation' },
  { icon: Settings, label: 'Settings', path: '/settings', active: true },
];

export function Sidebar(): React.JSX.Element {
  return (
    <aside className="w-64 h-screen bg-[#FAFAFA] border-r border-gray-200 flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-[#0F172A] font-display">
            Beezi
          </div>
          <span className="px-2 py-0.5 text-xs font-medium text-[#6366F1] bg-[#EEF2FF] rounded">
            Beta
          </span>
        </div>
      </div>

      <Separator.Root className="h-[1px] bg-gray-200 mx-4" />

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6">
        <ul className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

interface SidebarMenuItemProps {
  item: MenuItem;
}

function SidebarMenuItem({ item }: SidebarMenuItemProps): React.JSX.Element {
  const Icon = item.icon;
  const isActive = item.active ?? false;

  return (
    <li>
      <a
        href={item.path}
        className={`
          flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
          ${
            isActive
              ? 'bg-[#EEF2FF] text-[#6366F1]'
              : 'text-[#64748B] hover:bg-gray-100 hover:text-[#0F172A]'
          }
        `}
      >
        <Icon className="w-5 h-5" />
        <span className="text-sm font-medium">{item.label}</span>
      </a>
    </li>
  );
}
