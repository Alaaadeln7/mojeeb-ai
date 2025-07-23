"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import NavMainAdminDashboard from "@/components/organisms/NavMainAdminDashboard";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BookOpen,
  ChartLine,
  Database,
  LayoutDashboard,
  NotepadText,
  Settings,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/mojeb-ai-logo.png";
interface NavItem {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function AdminDashboardSidebar({ ...props }) {
  const t = useTranslations("AdminSidebar");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const navItems: NavItem[] = [
    {
      title: t("navItems.dashboard"),
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: t("navItems.clients"),
      url: "/clients",
      icon: User,
    },
    {
      title: t("navItems.analytics"),
      url: "/analytics",
      icon: ChartLine,
    },
    {
      title: t("navItems.usersRoles"),
      url: "users-roles",
      icon: Users,
    },
    {
      title: t("navItems.subscriptions"),
      url: "/subscriptions",
      icon: Database,
    },
    {
      title: t("navItems.settings"),
      url: "/settings",
      icon: Settings,
    },
    {
      title: t("navItems.plans"),
      url: "/plans",
      icon: NotepadText,
    },
    {
      title: t("navItems.enrollmentForm"),
      url: "/enrollment-form",
      icon: BookOpen,
    },
  ];

  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}
      side={isRTL ? "right" : "left"}
      className="border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
    >
      <SidebarHeader className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/">
              <Image src={logoImage} alt="Mojeeb AI" className="w-15" />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <NavMainAdminDashboard items={navItems} />
      </SidebarContent>
    </Sidebar>
  );
}
