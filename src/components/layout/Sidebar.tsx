import { useState } from "react";
import { cn } from "../../lib/utils";
import { Separator } from "../ui/separator";
import { NAVIGATION_ITEMS, SIDEBAR_CONFIG } from "./sidebar.constants";

interface SidebarProps {
  className?: string;
  defaultCollapsed?: boolean;
}

interface SidebarHeaderProps {
  collapsed: boolean;
}

interface SidebarMenuItemProps {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  active?: boolean;
  collapsed: boolean;
}

/**
 * Sidebar header component with Beezi logo and Beta badge
 */
function SidebarHeader({ collapsed }: SidebarHeaderProps) {
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-2">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            B
          </div>
          {!collapsed && (
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-foreground">Beezi</span>
              <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                Beta
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Individual sidebar menu item component
 */
function SidebarMenuItem({ label, icon: Icon, active = false, collapsed }: SidebarMenuItemProps) {
  return (
    <button
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-lg",
        "hover:bg-accent hover:text-accent-foreground",
        active && "bg-accent text-accent-foreground",
        !active && "text-muted-foreground",
        collapsed && "justify-center px-2"
      )}
      aria-label={label}
    >
      <Icon className={cn("h-5 w-5 shrink-0", active && "text-primary")} />
      {!collapsed && <span>{label}</span>}
    </button>
  );
}

/**
 * Sidebar menu component containing navigation items
 */
function SidebarMenu({ collapsed }: { collapsed: boolean }) {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <nav className="flex-1 px-3 py-2">
      <div className="space-y-1">
        {NAVIGATION_ITEMS.map((item) => (
          <div key={item.id} onClick={() => setActiveItem(item.id)}>
            <SidebarMenuItem
              {...item}
              active={activeItem === item.id}
              collapsed={collapsed}
            />
          </div>
        ))}
      </div>
    </nav>
  );
}

/**
 * Main Sidebar component
 *
 * A fixed-width sidebar with navigation menu items, logo, and collapsible state.
 * Matches Figma specifications: 232px width, bg-neutral-50, border-right
 */
export function Sidebar({ className, defaultCollapsed = false }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <aside
      className={cn(
        "flex flex-col bg-neutral-50 dark:bg-neutral-900 border-r border-border h-screen transition-all duration-300",
        collapsed ? `w-[${SIDEBAR_CONFIG.COLLAPSED_WIDTH}px]` : `w-[${SIDEBAR_CONFIG.WIDTH}px]`,
        className
      )}
      style={{
        width: collapsed ? SIDEBAR_CONFIG.COLLAPSED_WIDTH : SIDEBAR_CONFIG.WIDTH,
      }}
    >
      {/* Header with logo and beta badge */}
      <SidebarHeader collapsed={collapsed} />

      <Separator className="mb-2" />

      {/* Navigation menu */}
      <SidebarMenu collapsed={collapsed} />

      {/* Collapse toggle button */}
      <div className="p-3 mt-auto">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>
    </aside>
  );
}
