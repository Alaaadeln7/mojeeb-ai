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
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container px-4 sm:px-6">
        <nav className="flex justify-between items-center h-16 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={LogoImage}
              alt="logo"
              className="w-19 hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative px-1 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <Button
                  asChild
                  variant="default"
                  className="rounded-full px-6 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-md transition-colors"
                >
                  <Link href={handleRouteDashboard()}>{t("dashboard")}</Link>
                </Button>
              ) : (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-6 border-teal-500 text-teal-600 hover:bg-teal-50 dark:hover:bg-gray-800"
                  >
                    <Link href="/auth/login">{t("getStarted")}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="default"
                    className="rounded-full px-6 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-md transition-colors"
                  >
                    <Link href="/create-enrollment-form">
                      {t("createEnrollmentForm")}
                    </Link>
                  </Button>
                </>
              )}
            </div>

            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg"
            >
              <ul className="flex flex-col space-y-2 p-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1 }}
                  className="pt-2"
                >
                  {user ? (
                    <Button
                      asChild
                      variant="default"
                      className="w-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-md"
                    >
                      <Link href={handleRouteDashboard()}>
                        {t("dashboard")}
                      </Link>
                    </Button>
                  ) : (
                    <>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full rounded-full mb-2 border-teal-500 text-teal-600 hover:bg-teal-50 dark:hover:bg-gray-800"
                      >
                        <Link href="/auth/login">{t("getStarted")}</Link>
                      </Button>
                      <Button
                        asChild
                        variant="default"
                        className="w-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-md"
                      >
                        <Link href="/create-enrollment-form">
                          {t("createEnrollmentForm")}
                        </Link>
                      </Button>
                    </>
                  )}
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
