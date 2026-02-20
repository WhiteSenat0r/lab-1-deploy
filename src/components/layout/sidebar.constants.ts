import {
  LayoutDashboard,
  Bell,
  Users,
  FolderKanban,
  Ticket,
  BarChart3,
  CreditCard,
  Settings,
} from "lucide-react";

/**
 * Navigation menu items for the sidebar
 */
export const NAVIGATION_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    id: "team",
    label: "Team",
    icon: Users,
    href: "/team",
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderKanban,
    href: "/projects",
  },
  {
    id: "tickets",
    label: "Tickets",
    icon: Ticket,
    href: "/tickets",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    id: "billing",
    label: "Billing",
    icon: CreditCard,
    href: "/billing",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
] as const;

/**
 * Sidebar configuration constants
 */
export const SIDEBAR_CONFIG = {
  WIDTH: 232, // pixels, as specified in the plan
  COLLAPSED_WIDTH: 64, // pixels for collapsed state
} as const;
