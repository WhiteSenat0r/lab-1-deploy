import { useState, ReactElement } from "react";
import "./Sidebar.css";

// Navigation item type definition
interface NavItem {
  id: string;
  label: string;
  icon: ReactElement;
}

// Sidebar component
export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<string>("settings");

  // Navigation items data
  const navItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <rect x="11" y="2" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <rect x="2" y="11" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <rect x="11" y="11" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2C9.44772 2 9 2.44772 9 3V3.5C6.51472 4.00772 4.58579 6.13616 4.58579 8.75V12L3 13.5V15H17V13.5L15.4142 12V8.75C15.4142 6.13616 13.4853 4.00772 11 3.5V3C11 2.44772 10.5523 2 10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M8.5 15V15.5C8.5 16.3284 9.17157 17 10 17C10.8284 17 11.5 16.3284 11.5 15.5V15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      id: "team",
      label: "Team",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="13" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M3 15.5C3 13.0147 5.01472 11 7.5 11C7.83 11 8.15 11.03 8.46 11.09" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M11.54 11.09C11.85 11.03 12.17 11 12.5 11C14.9853 11 17 13.0147 17 15.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H7L9 6H15C16.1046 6 17 6.89543 17 8V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      id: "tickets",
      label: "Tickets",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <line x1="3" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="6" y1="11" x2="10" y2="11" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="6" y1="13" x2="12" y2="13" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16 16V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: "billing",
      label: "Billing",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M10 2V4M10 16V18M18 10H16M4 10H2M15.657 4.343L14.243 5.757M5.757 14.243L4.343 15.657M15.657 15.657L14.243 14.243M5.757 5.757L4.343 4.343" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  // Handle navigation item click
  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
  };

  return (
    <aside className="sidebar">
      {/* Sidebar header with logo and beta badge */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L8 8L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 4L16 8L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12L8 16L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12L16 16L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="sidebar-brand">Beezi</span>
          <span className="sidebar-beta-badge">Beta</span>
        </div>
        <button className="sidebar-toggle" aria-label="Toggle sidebar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>

      {/* Navigation items */}
      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar-nav-item ${selectedItem === item.id ? "active" : ""}`}
                onClick={() => handleItemClick(item.id)}
              >
                <span className="sidebar-nav-icon">{item.icon}</span>
                <span className="sidebar-nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
