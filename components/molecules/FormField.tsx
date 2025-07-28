import { useLocale, useTranslations } from "next-intl";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import React from "react";
import { cn } from "@/lib/utils";

export default function FormField({
  name,
  value,
  onChange,
  onBlur,
  error,
  textarea = false,
  placeholder,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const t = useTranslations("AddConversationScriptModal");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="w-full">
      {textarea ? (
        <Textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={t(placeholder || "")}
          className={cn(
            "min-h-[80px] resize-none bg-transparent border-0 p-0 text-sm leading-relaxed placeholder:text-[#3d4d58]/60 focus-visible:ring-0 focus-visible:ring-offset-0",
            error && "text-red-600",
            isRTL && "text-right"
          )}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : (
        <Input
          id={name}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={t(placeholder || "")}
          className={cn(
            "bg-transparent border-0 p-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#3d4d58]/60",
            error && "text-red-600",
            isRTL && "text-right"
          )}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
    </div>
  );
}
