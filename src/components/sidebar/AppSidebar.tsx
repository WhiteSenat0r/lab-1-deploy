import * as React from "react"
import {
  LayoutGrid,
  Bell,
  Users,
  Folder,
  Search,
  BarChart3,
  DollarSign,
  Settings,
  LayoutPanelLeft,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../ui/sidebar"
import { MENU_SECTIONS } from "./sidebar.constants"

// Icon mapping
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  Bell,
  Users,
  Folder,
  Search,
  BarChart3,
  DollarSign,
  Settings,
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between gap-2 p-2">
          {/* Beezi Logo with Beta badge */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              {/* Logo placeholder - simplified for now */}
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-sidebar-foreground)" }}
              >
                Beezi
              </span>
              <div
                className="flex items-center justify-center px-2 py-0.5 rounded-md border"
                style={{
                  borderColor: "var(--color-sidebar-border)",
                  backgroundColor: "var(--color-sidebar-background)"
                }}
              >
                <span
                  className="text-[10px] font-semibold"
                  style={{ color: "var(--color-sidebar-foreground)" }}
                >
                  Beta
                </span>
              </div>
            </div>
          </div>

          {/* Toggle button */}
          <button
            className="flex items-center justify-center w-7 h-7 rounded-lg hover:bg-[var(--color-sidebar-accent)] transition-colors"
          >
            <LayoutPanelLeft
              className="w-4 h-4"
              style={{ color: "var(--color-sidebar-foreground)" }}
            />
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {MENU_SECTIONS.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                {section.items.map((item) => {
                  const Icon = ICON_MAP[item.icon]
                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton isActive={item.isActive}>
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
                {/* Add separator between sections, but not after the last one */}
                {sectionIndex < MENU_SECTIONS.length - 1 && (
                  <SidebarSeparator />
                )}
              </React.Fragment>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
