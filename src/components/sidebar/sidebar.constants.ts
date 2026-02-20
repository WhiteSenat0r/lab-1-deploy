/**
 * Sidebar menu items configuration
 * Based on Figma design: Beezi Platform / Mockups
 */

export interface MenuItem {
  id: string
  label: string
  icon: string
  href: string
  isActive?: boolean
}

export interface MenuSection {
  items: MenuItem[]
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "LayoutGrid",
        href: "/dashboard",
      },
      {
        id: "notifications",
        label: "Notifications",
        icon: "Bell",
        href: "/notifications",
      },
    ],
  },
  {
    items: [
      {
        id: "team",
        label: "Team",
        icon: "Users",
        href: "/team",
      },
      {
        id: "projects",
        label: "Projects",
        icon: "Folder",
        href: "/projects",
      },
      {
        id: "tickets",
        label: "Tickets",
        icon: "Search",
        href: "/tickets",
      },
    ],
  },
  {
    items: [
      {
        id: "analytics",
        label: "Analytics",
        icon: "BarChart3",
        href: "/analytics",
      },
      {
        id: "billing",
        label: "Billing",
        icon: "DollarSign",
        href: "/billing",
      },
      {
        id: "settings",
        label: "Settings",
        icon: "Settings",
        href: "/settings",
        isActive: true, // Settings is active in the Figma design
      },
    ],
  },
]
