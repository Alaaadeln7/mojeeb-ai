"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LogoImage from "../../public/mojeb-ai-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";

export default function LandingPageHeader() {
  const t = useTranslations("Header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const handleRouteDashboard = () => {
    if (user?.role === "admin") {
      return "/admin-dashboard";
    }
    if (user?.role === "client") {
      return "/client-dashboard";
    }
  };
  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("features"), href: "/features" },
    { name: t("pricing"), href: "/pricing" },
    { name: t("contact"), href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-teal-600">
            <Image
              src={LogoImage}
              alt="logo"
              width={56}
              height={56}
              className="w-14 h-auto"
              priority
            />
          </Link>
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary btn-primary"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          <div className="flex justify-between gap-5">
            <div className="hidden md:block">
              {user ? (
                <Button className="w-full btn-primary">
                  <Link href={handleRouteDashboard()}>{t("dashboard")}</Link>
                </Button>
              ) : (
                <Button
                  asChild
                  className="w-full btn-primary hover:bg-primary/90"
                >
                  <Link href="/auth/login">{t("getStarted")}</Link>
                </Button>
              )}
            </div>
            {!user && (
              <Button className="btn-primary hidden md:block">
                <Link href="/create-enrollment-form">
                  Create Enrollment Form
                </Link>
              </Button>
            )}
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {user ? (
                    <Button className="w-full btn-primary">
                      <Link href={handleRouteDashboard()}>
                        {t("dashboard")}
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="w-full btn-primary hover:bg-primary/90"
                    >
                      <Link href="/auth/login">{t("getStarted")}</Link>
                    </Button>
                  )}
                </motion.li>
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    asChild
                    className="w-full btn-primary hover:bg-primary/90"
                  >
                    create Enrollment form
                  </Button>
                </motion.li>
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button className="btn-primary w-full">
                    <Link href="/create-enrollment-form">
                      Create Enrollment Form
                    </Link>
                  </Button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
