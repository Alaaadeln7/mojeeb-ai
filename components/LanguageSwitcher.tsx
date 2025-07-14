"use client";

import { AxiosAPI } from "@/axios/axiosInstance";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [, startTransition] = useTransition();

  function switchTo(locale: string) {
    startTransition(() => {
      document.cookie = `LANG=${locale}; path=/; max-age=31536000; SameSite=Lax`;
      router.refresh();
    });
    AxiosAPI.defaults.headers["Accept-Language"] = locale;
    queryClient.invalidateQueries();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem
          className="cursor-pointer flex items-center gap-2"
          onClick={() => switchTo("en")}
        >
          <span className="text-lg">🇬🇧</span>
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center gap-2"
          onClick={() => switchTo("ar")}
        >
          <span className="text-lg">🇸🇦</span>
          <span>العربية</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
