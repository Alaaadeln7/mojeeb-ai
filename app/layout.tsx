import type { Metadata } from "next";
import { getMessages, getLocale } from "next-intl/server";
import { Providers } from "@/providers/Providers";
import "@/styles/globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "starter-theme-nextjs",
  description: "Order direct from Demo",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body suppressHydrationWarning>
        <Providers locale={locale} messages={messages}>
          {children}
          <LanguageSwitcher />
        </Providers>
      </body>
    </html>
  );
}
