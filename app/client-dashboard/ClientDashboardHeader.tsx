"use client";

import { Loader2, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";
import { SidebarTrigger } from "@/components/ui/sidebar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import NotificationsMenu from "@/components/organisms/NotificationsMenu";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  DropdownMenu,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuth from "@/hooks/useAuth";

interface ClientDashboardHeaderProps {
  isOpenProfile: boolean;
  setIsOpenProfile: (open: boolean) => void;
}

export default function ClientDashboardHeader({
  isOpenProfile,
  setIsOpenProfile,
}: ClientDashboardHeaderProps) {
  const t = useTranslations("Dashboard.Header");
  const { logout, loading: authLoading } = useAuth();
  return (
    <header className="flex items-center justify-between p-4 px-6 border-b">
      <SidebarTrigger />

      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <NotificationsMenu t={t} />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setIsOpenProfile(!isOpenProfile)}>
              {t("userProfile")}
              <User className="size-5" />
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
                  {t("loading")}
                </>
              ) : (
                <>
                  <LogOut className="mr-2 size-4" />
                  {t("logout")}
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
