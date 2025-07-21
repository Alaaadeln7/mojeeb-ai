import type { Metadata } from "next";
import { getMessages, getLocale } from "next-intl/server";
import { Providers } from "@/providers/Providers";
import "@/styles/globals.css";
import ClientProviderWrapper from "./ClientProviderWrapper";
import { ThemeProvider } from "../components/molecules/theme-provider";
import { Toaster } from "sonner";
import Footer from "../components/molecules/Footer";
export const metadata: Metadata = {
  title: "Mojeeb AI",
  description:
    "Mojeeb ai Your first voice with the customer, and your unforgettable impression. He responds, understands, and serves , Before you don't respond",
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
        <ClientProviderWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers locale={locale} messages={messages}>
              {children}
              <Toaster />
              <Footer />
            </Providers>
          </ThemeProvider>
        </ClientProviderWrapper>
      </body>
    </html>
  );
}
