"use client";
import * as React from "react";
import logoImage from "../../public/mojeb-ai-logo.png";
import Image from "next/image";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function AuthHeader() {
  return (
    <header className="bg-background text-foreground shadow-md shadow-background">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logoImage} alt={"logo"} className="w-14" />
        </Link>
        <div className="flex justify-center items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
