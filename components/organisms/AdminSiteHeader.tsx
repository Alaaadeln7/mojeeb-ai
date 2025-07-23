"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Loader2, LogOut, User, Settings } from "lucide-react";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTranslations } from "next-intl";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import NotificationsMenu from "./NotificationsMenu";

export default function AdminSiteHeader() {
  const t = useTranslations("AdminHeader");
  const { loading: authLoading, logout } = useAuth();

  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors" />
          <Separator orientation="vertical" className="h-6" />
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <NotificationsMenu t={t} />
          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent"
              >
                <User className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user?.fullName}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/admin-dashboard/profile"
                  className="w-full cursor-pointer"
                >
                  <User className="mr-2 size-4" />
                  {t("account.profile")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/admin-dashboard/settings"
                  className="w-full cursor-pointer"
                >
                  <Settings className="mr-2 size-4" />
                  {t("account.settings")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={logout}
                disabled={authLoading}
                className="text-destructive focus:text-destructive cursor-pointer focus:bg-destructive/10"
              >
                {authLoading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    {t("account.loading")}
                  </>
                ) : (
                  <>
                    <LogOut className="mr-2 size-4" />
                    {t("account.logout")}
                  </>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
