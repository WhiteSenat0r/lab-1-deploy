/**
 * Sidebar component with navigation items
 * Displays Beezi branding and navigation menu
 */
export function Sidebar() {
  const navItems = [
    { icon: '📊', label: 'Dashboard' },
    { icon: '🔔', label: 'Notifications' },
    { icon: '👥', label: 'Team' },
    { icon: '📁', label: 'Projects' },
    { icon: '🎫', label: 'Tickets' },
    { icon: '📈', label: 'Analytics' },
    { icon: '💳', label: 'Billing' },
    { icon: '⚙️', label: 'Settings', active: true },
  ];

  return (
    <aside className="w-[220px] bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200 flex items-center gap-2">
        <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L14 14M2 14L14 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="font-semibold text-lg">Beezi</span>
        <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">Beta</span>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              item.active
                ? 'bg-gray-100 text-gray-900 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
