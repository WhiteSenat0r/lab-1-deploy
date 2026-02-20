import * as React from "react"
import { SidebarProvider } from "../ui/sidebar"
import { AppSidebar } from "../sidebar/AppSidebar"

interface PageLayoutProps {
  children: React.ReactNode
}

/**
 * PageLayout component
 * Provides the main layout structure with sidebar and content area
 * Based on Figma design: Beezi Platform / Mockups
 */
export function PageLayout({ children }: PageLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        {children}
      </main>
    </SidebarProvider>
  )
}
