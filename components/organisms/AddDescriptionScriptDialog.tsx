"use client";

import type React from "react";
import { FileText, Plus, AlertCircle, Loader2, Save } from "lucide-react";
import { useFormik, validateYupSchema } from "formik";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import useChatbot from "@/hooks/useChatbot";

interface FormValues {
  title: string;
  description: string;
}

interface AddDescriptionScriptDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (values: FormValues) => Promise<void>;
  isLoading?: boolean;
  initialValues?: FormValues;
  isEditing?: boolean;
}

export default function AddDescriptionScriptDialog({
  open,
  onClose,
  onSubmit,
  isLoading = false,
  initialValues,
  isEditing = false,
}: AddDescriptionScriptDialogProps) {
  const t = useTranslations("DescriptionScriptDialog");
  const router = useRouter();
  const isRTL = router.locale === "ar";
  const { handleUpdateDescription, createOrUpdateDescriptionLoading } =
    useChatbot();
  // Validation schema
  const AddDescriptionValidation = Yup.object({
    description: Yup.string()
      .required(t("validation.descriptionRequired"))
      .min(10, t("validation.descriptionMinLength")),
  });

  const formik = useFormik<FormValues>({
    initialValues: initialValues || {
      description: "",
    },
    validationSchema: AddDescriptionValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (onSubmit) {
          await handleUpdateDescription({ description: values.description });
          if (!isEditing) {
            resetForm();
          }
          onClose();
          toast.success(isEditing ? t("success.update") : t("success.create"));
        }
      } catch (error) {
        console.error(error);
        toast.error(isEditing ? t("errors.update") : t("errors.create"));
      }
    },
    enableReinitialize: true,
  });

  const handleClose = () => {
    if (!isLoading) {
      formik.resetForm();
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden p-0 gap-0">
        {/* Header */}
        <DialogHeader
          className={`px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <div
            className={`flex items-center justify-between ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <FileText className="size-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-semibold text-slate-800">
                {isEditing ? t("editTitle") : t("createTitle")}
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {isEditing ? t("editSubtitle") : t("createSubtitle")}
              </p>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <form
            onSubmit={formik.handleSubmit}
            className="p-6 space-y-6"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Description Field */}
            <Card className="p-4 bg-slate-50/50 border-slate-200">
              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-sm font-medium text-slate-700"
                >
                  {t("form.descriptionLabel")}
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={t("form.descriptionPlaceholder")}
                  rows={6}
                  className={cn(
                    "bg-white border-slate-200 focus:border-blue-300 focus:ring-blue-200",
                    formik.touched.description &&
                      formik.errors.description &&
                      "border-destructive focus:border-destructive"
                  )}
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formik.errors.description}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {t("form.descriptionHelper")}
                </p>
              </div>
            </Card>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t ${
                isRTL ? "sm:flex-row-reverse" : ""
              }`}
            >
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isLoading}
                className="order-2 sm:order-1 bg-transparent"
              >
                {t("buttons.cancel")}
              </Button>
              <Button
                type="submit"
                disabled={isLoading || !formik.isValid}
                className={`order-1 sm:order-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2
                      className={`${
                        isRTL ? "ml-2" : "mr-2"
                      } h-4 w-4 animate-spin`}
                    />
                    {isEditing ? t("buttons.saving") : t("buttons.creating")}
                  </>
                ) : (
                  <>
                    {isEditing ? (
                      <Save className={`${isRTL ? "ml-2" : "mr-2"} h-4 w-4`} />
                    ) : (
                      <Plus className={`${isRTL ? "ml-2" : "mr-2"} h-4 w-4`} />
                    )}
                    {createOrUpdateDescriptionLoading ? (
                      <>
                        <Loader2
                          className={`${
                            isRTL ? "ml-2" : "mr-2"
                          } h-4 w-4 animate-spin`}
                        />
                        {isEditing ? t("buttons.save") : t("buttons.create")}
                      </>
                    ) : isEditing ? (
                      t("buttons.save")
                    ) : (
                      t("buttons.create")
                    )}
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
