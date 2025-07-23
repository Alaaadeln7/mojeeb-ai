"use client";

import { Icon } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  url: string;
  icon?: Icon;
}

interface NavMainAdminDashboardProps {
  items: NavItem[];
}

export default function NavMainAdminDashboard({
  items,
}: NavMainAdminDashboardProps) {
  return (
    <nav className="flex flex-col gap-2 p-4">
      {items.map((item) => (
        <Link
          key={item.title}
          href={`/admin-dashboard/${item.url}`}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-lg",
            "text-gray-700 dark:text-gray-200",
            "hover:bg-teal-50 dark:hover:bg-teal-900/30",
            "hover:text-teal-600 dark:hover:text-teal-400",
            "transition-all duration-200 ease-in-out",
            "text-sm font-medium tracking-wide",
            "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
            "data-[active=true]:bg-teal-100 dark:data-[active=true]:bg-teal-900/50",
            "data-[active=true]:text-teal-700 dark:data-[active=true]:text-teal-300"
          )}
          aria-label={item.title}
        >
          {item.icon && (
            <item.icon
              className={cn(
                "h-5 w-5",
                "text-gray-500 dark:text-gray-400",
                "group-hover:text-teal-600 dark:group-hover:text-teal-400",
                "group-hover:scale-105 transition-transform duration-200",
                "data-[active=true]:text-teal-700 dark:data-[active=true]:text-teal-300",
                "data-[active=true]:scale-105"
              )}
              aria-hidden="true"
            />
          )}
          <span className="truncate">{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
