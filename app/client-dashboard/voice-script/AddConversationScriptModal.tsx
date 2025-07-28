"use client";

import type React from "react";
import {
  Bot,
  Plus,
  MessageSquareText,
  AlertCircle,
  Loader2,
  User,
} from "lucide-react";
import { useFormik } from "formik";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { showToast } from "@/components/ui/sonner";
import FormField from "@/components/molecules/FormField";

interface FormValues {
  question: string;
  answer: string;
  keyword: string;
}

interface AddConversationScriptModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onConfirm?: (values: FormValues) => Promise<void>;
  loading?: boolean;
}

// Validation schema
const AddConversationValidation = Yup.object({
  question: Yup.string()
    .required("AddConversationScriptModal.validation.question_required")
    .min(5, "AddConversationScriptModal.validation.question_min"),
  answer: Yup.string()
    .required("AddConversationScriptModal.validation.answer_required")
    .min(10, "AddConversationScriptModal.validation.answer_min"),
  keyword: Yup.string()
    .required("AddConversationScriptModal.validation.keyword_required")
    .min(2, "AddConversationScriptModal.validation.keyword_min"),
});

const ChatBubble = ({
  role = "customer",
  children,
  error,
}: {
  role?: "customer" | "ai";
  children: React.ReactNode;
  error?: string;
}) => {
  const t = useTranslations("AddConversationScriptModal");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const isAI = role === "ai";

  return (
    <div
      className={cn(
        "flex w-full mb-6",
        isRTL ? "flex-row-reverse" : "justify-end"
      )}
    >
      <div
        className={cn(
          "flex items-start gap-3 max-w-[85%] w-full",
          isAI
            ? isRTL
              ? "flex-row-reverse"
              : "flex-row"
            : isRTL
            ? "flex-row"
            : "flex-row-reverse"
        )}
      >
        {/* Avatar */}
        <Avatar className="w-8 h-8 flex-shrink-0 mt-1">
          <AvatarFallback
            className={cn(
              "text-white text-sm font-medium",
              isAI ? "bg-[#10a5b1]" : "bg-[#3d4d58]"
            )}
          >
            {isAI ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
          </AvatarFallback>
        </Avatar>

        {/* Message Container */}
        <div
          className={cn(
            "flex flex-col flex-1 min-w-0",
            isAI
              ? isRTL
                ? "items-end"
                : "items-start"
              : isRTL
              ? "items-start"
              : "items-end"
          )}
        >
          {/* Sender Label */}
          <div className="mb-1">
            <span className="text-xs font-medium text-[#3d4d58]">
              {isAI ? t("ai_response_label") : t("customer_message_label")}
            </span>
          </div>

          {/* Message Bubble */}
          <div
            className={cn(
              "relative rounded-2xl px-4 py-3 shadow-sm max-w-full",
              isAI
                ? "bg-[#10a5b1]/10 text-[#3d4d58] rounded-tl-md"
                : "bg-[#3d4d58] text-white rounded-tr-md"
            )}
          >
            <div className="text-sm leading-relaxed break-words">
              {children}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div
              className={cn(
                "flex items-center gap-1 mt-2 text-xs text-red-600",
                isRTL ? "flex-row-reverse" : ""
              )}
            >
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{t(error)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AddConversationScriptModal({
  isModalOpen,
  setIsModalOpen,
  onConfirm,
  loading,
}: AddConversationScriptModalProps) {
  const t = useTranslations("AddConversationScriptModal");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const formik = useFormik<FormValues>({
    initialValues: {
      question: "",
      answer: "",
      keyword: "",
    },
    validationSchema: AddConversationValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        await onConfirm(values);
        resetForm();
        setIsModalOpen(false);
        showToast(t("success_message"), "success");
      } catch (error) {
        console.error(error);
        toast.error(t("error_message"));
      }
    },
  });

  const handleClose = () => {
    formik.resetForm();
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        className={cn(
          "sm:max-w-2xl max-h-[90vh] overflow-hidden p-0 gap-0",
          isRTL && "rtl"
        )}
      >
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b bg-[#10a5b1]/10">
          <div
            className={cn(
              "flex items-center justify-between",
              isRTL && "flex-row-reverse"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-3",
                isRTL && "flex-row-reverse"
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-[#10a5b1] flex items-center justify-center">
                <MessageSquareText className="w-5 h-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-xl font-semibold text-[#3d4d58]">
                  {t("title")}
                </DialogTitle>
                <p className="text-sm text-[#3d4d58]/80 mt-1">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={formik.handleSubmit} className="p-6 space-y-6">
            {/* Chat Preview */}
            <div className="space-y-4">
              {/* Customer Message */}
              <ChatBubble
                role="customer"
                error={
                  formik.touched.question ? formik.errors.question : undefined
                }
              >
                <FormField
                  name="question"
                  label={t("customer_message_label")}
                  value={formik.values.question}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.question ? formik.errors.question : undefined
                  }
                  textarea
                  placeholder="customer_message_placeholder"
                />
              </ChatBubble>

              {/* AI Response */}
              <ChatBubble
                role="ai"
                error={formik.touched.answer ? formik.errors.answer : undefined}
              >
                <FormField
                  name="answer"
                  label={t("ai_response_label")}
                  value={formik.values.answer}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.answer ? formik.errors.answer : undefined
                  }
                  textarea
                  placeholder="ai_response_placeholder"
                />
              </ChatBubble>
            </div>

            {/* Keyword Field */}
            <Card className="p-4 bg-[#10a5b1]/5 border-[#10a5b1]/20">
              <div className="space-y-2">
                <Label
                  htmlFor="keyword"
                  className="text-sm font-medium text-[#3d4d58]"
                >
                  {t("trigger_keyword_label")}
                </Label>
                <Input
                  id="keyword"
                  name="keyword"
                  value={formik.values.keyword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={t("trigger_keyword_placeholder")}
                  className={cn(
                    "bg-white border-[#10a5b1]/20 focus:border-[#10a5b1] focus:ring-[#10a5b1]/50",
                    formik.touched.keyword &&
                      formik.errors.keyword &&
                      "border-red-600 focus:border-red-600",
                    isRTL && "text-right"
                  )}
                />
                {formik.touched.keyword && formik.errors.keyword && (
                  <p
                    className={cn(
                      "text-xs text-red-600 flex items-center gap-1",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <AlertCircle className="w-3 h-3" />
                    {t(formik.errors.keyword)}
                  </p>
                )}
                <p className="text-xs text-[#3d4d58]/80">
                  {t("trigger_keyword_description")}
                </p>
              </div>
            </Card>

            {/* Action Buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-[#10a5b1]/20",
                isRTL && "sm:flex-row-reverse"
              )}
            >
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={loading}
                className="order-2 sm:order-1 bg-transparent border-[#3d4d58] text-[#3d4d58] hover:bg-[#10a5b1]/10 hover:text-[#10a5b1]"
              >
                {t("cancel_button")}
              </Button>
              <Button
                type="submit"
                disabled={loading || !formik.isValid}
                className="order-1 sm:order-2 bg-[#10a5b1] hover:bg-[#3d4d58] text-white"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("creating_button")}
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    {t("create_button")}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
