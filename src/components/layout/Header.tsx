import { cn } from "../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, Search } from "lucide-react";

interface HeaderProps {
  className?: string;
}

/**
 * Header component for the page layout
 *
 * Contains search, notifications, and user profile sections
 */
export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between px-6 py-4 bg-background border-b border-border",
        className
      )}
    >
      {/* Left section - Search */}
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-muted border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Right section - Notifications and Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications button */}
        <button
          className="relative p-2 hover:bg-accent rounded-lg transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 text-muted-foreground" />
          {/* Notification badge */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </button>

        {/* User profile */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
