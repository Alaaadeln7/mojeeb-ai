"use client";

import { useTranslations } from "next-intl";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-[#3d4d58] text-white py-12 mt-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href={t("facebookLink")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-r from-[#10a5b1] to-[#16deec] rounded-full p-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#16deec]/30 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="size-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Facebook
            </span>
          </a>

          <a
            href={t("twitterLink")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-r from-[#10a5b1] to-[#16deec] rounded-full p-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#16deec]/30 hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="size-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Twitter
            </span>
          </a>

          <a
            href={t("linkedinLink")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-r from-[#10a5b1] to-[#16deec] rounded-full p-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#16deec]/30 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              LinkedIn
            </span>
          </a>

          <a
            href={t("whatsappLink")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-r from-[#10a5b1] to-[#16deec] rounded-full p-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#16deec]/30 hover:scale-110"
            aria-label="WhatsApp"
          >
            <MessageCircle className="size-5 text-white" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              WhatsApp
            </span>
          </a>
        </div>
        <nav className="flex items-center space-x-6 mb-4 md:mb-0">
          {[
            { href: "/about", label: t("about") },
            { href: "/services", label: t("services") },
            { href: "/terms-conditions", label: t("termsConditions") },
            { href: "/privacy-policy", label: t("privacyPolicy") },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-1.5 text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10 text-white/80 hover:text-white">
                {link.label}
              </span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#10a5b1] to-[#16deec] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#16deec] group-hover:w-4/5 group-hover:left-1/10 transition-all duration-400" />
            </Link>
          ))}
        </nav>
        <div>
          <div className="space-y-3">
            {/* Phone with icon */}
            <div className="flex items-center justify-center md:justify-end gap-2">
              <Phone className="size-5 text-[#16deec]" />
              <p className="text-white hover:text-[#16deec] transition-colors duration-200">
                {t("phone")}
              </p>
            </div>

            {/* Email with icon */}
            <div className="flex items-center justify-center md:justify-end gap-2">
              <Mail className="size-5 text-[#16deec]" />
              <a
                href={`mailto:${t("email")}`}
                className="text-white hover:text-[#16deec] transition-colors duration-200"
              >
                {t("email")}
              </a>
            </div>

            {/* Address with icon */}
            <div className="flex items-center justify-center md:justify-end gap-2">
              <MapPin className="size-5 text-[#16deec]" />
              <p className="text-white">{t("address")}</p>
            </div>

            {/* Copyright with decorative separator */}
          </div>
        </div>
      </div>
      <div className="pt-4 mt-4 border-t border-white/10 text-center">
        <p className="text-sm text-white/80">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
