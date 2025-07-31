"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Database,
  LayoutDashboard,
  MessageSquareMore,
  Settings,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import NavMainClientDashboard from "./NavMainClientDashboard";
import Image from "next/image";
import logoImage from "../../public/mojeb-ai-logo.png";
interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export default function ClientSidebar({ ...props }) {
  const t = useTranslations("clientSidebar");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const navItems: NavItem[] = [
    {
      title: t("navItems.dashboard"),
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: t("navItems.callsAndTickets"),
      url: "/calls-tickets",
      icon: User,
    },
    {
      title: t("navItems.voiceScript"),
      url: "/voice-script",
      icon: MessageSquareMore,
    },
    {
      title: t("navItems.performanceAnalytics"),
      url: "/performance-analytics",
      icon: Users,
    },
    {
      title: t("navItems.aiOutbound"),
      url: "/ai-outbound-calls",
      icon: Database,
    },
    {
      title: t("navItems.settings"),
      url: "/settings",
      icon: Settings,
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
              <a href="#">
                <Image
                  src={logoImage}
                  alt={"logo image"}
                  className="w-14 object-cover"
                />
                <span className="text-base font-semibold">
                  {t("brandName")}
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMainClientDashboard items={navItems} />
      </SidebarContent>
    </Sidebar>
  );
}
