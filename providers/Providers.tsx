"use client";

import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./ReactQueryProvider";
import { ErrorMessageProvider } from "@/hooks/useErrorMessage";

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ReactQueryProvider>
        <ErrorMessageProvider>{children}</ErrorMessageProvider>
      </ReactQueryProvider>
    </NextIntlClientProvider>
  );
}
