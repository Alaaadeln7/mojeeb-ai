"use client";

import { AxiosAPI } from "@/axios/axiosInstance";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
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
  // return (
  //   <Select>
  //     <SelectTrigger className="w-[180px]">
  //       <SelectValue placeholder="language" />
  //     </SelectTrigger>
  //     <SelectContent>
  //       <SelectGroup>
  //         <SelectLabel>language</SelectLabel>
  //         <SelectItem value="en" onClick={ () =>  switchTo("en")}>
  //           <div className="flex items-center gap-2">
  //             <span>🇬🇧</span>
  //             <span>English</span>
  //           </div>
  //         </SelectItem>
  //         <SelectItem value="ar" onClick={ () =>  switchTo("ar")}>
  //           <div className="flex items-center gap-2">
  //             <span>🇸🇦</span>
  //             <span>العربية</span>
  //           </div>
  //         </SelectItem>
  //       </SelectGroup>
  //     </SelectContent>
  //   </Select>
  // );
  return (
    <div style={{ padding: "1rem", display: "flex", gap: "0.5rem" }}>
      <button className="text-[22px]" onClick={() => switchTo("en")}>
        English
      </button>
      <button className="text-[22px]" onClick={() => switchTo("ar")}>
        العربية
      </button>
    </div>
  );
}
