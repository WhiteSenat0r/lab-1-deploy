/**
 * Sidebar component with navigation items
 * Displays Beezi branding and navigation menu
 */

// Simple icon components
const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const NotificationsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2C6.5 2 5 3 5 5V8L3.5 10H12.5L11 8V5C11 3 9.5 2 8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10V10.5C9 11.33 8.55 12 8 12C7.45 12 7 11.33 7 10.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const TeamIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="11" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 13C2 11 4 10 6 10C8 10 10 11 10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 13C10 11.5 11 11 12 11C13 11 14 11.5 14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ProjectsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H7V6H3V3Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 13V8H13V13H3Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 3H13V6H9V3Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const TicketsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 6H14" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12V9M8 12V6M13 12V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BillingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 2V3.5M8 12.5V14M14 8H12.5M3.5 8H2M12.5 3.5L11.5 4.5M4.5 11.5L3.5 12.5M12.5 12.5L11.5 11.5M4.5 4.5L3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export function Sidebar() {
  const navItems = [
    { icon: <DashboardIcon />, label: 'Dashboard' },
    { icon: <NotificationsIcon />, label: 'Notifications' },
    { icon: <TeamIcon />, label: 'Team' },
    { icon: <ProjectsIcon />, label: 'Projects' },
    { icon: <TicketsIcon />, label: 'Tickets' },
    { icon: <AnalyticsIcon />, label: 'Analytics' },
    { icon: <BillingIcon />, label: 'Billing' },
    { icon: <SettingsIcon />, label: 'Settings', active: true },
  ];

  return (
    <aside className="w-[200px] bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Logo Section */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L14 14M2 14L14 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="font-semibold text-base">Beezi</span>
        <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-normal">Beta</span>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm transition-colors ${
              item.active
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="w-4 h-4 flex items-center justify-center">{item.icon}</span>
            <span className="font-normal">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
