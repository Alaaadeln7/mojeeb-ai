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
// Define interfaces for type safety
import Icon from "@/components/organisms/NavMainAdminDashboard";
interface NavItem {
  title: string;
  url: string;
  icon?: Icon;
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
    <Sidebar collapsible="offcanvas" {...props} side={isRTL ? "right" : "left"}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <span className="text-base font-semibold">
                  {t("brandName")}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMainAdminDashboard items={navItems} />
      </SidebarContent>
    </Sidebar>
  );
}
