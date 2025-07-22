"use client";

import { DialogProps } from "@/types/EnrollmentForm";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { CheckCircle2, Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function AcceptConfirmationDialog({
  isOpen,
  onClose,
  loading,
  item,
  onConfirm,
}: DialogProps) {
  const t = useTranslations("EnrollmentForm.AcceptDialog");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-sm rounded-lg p-6"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          {/* Success icon */}
          <div className="p-3 bg-success/10 rounded-full">
            <CheckCircle2 className="w-8 h-8 text-success" />
          </div>

          {/* Confirmation text */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{t("title")}</h3>
            <p className="text-sm text-muted-foreground">{t("message")}</p>
          </div>

          {/* Action buttons */}
          <div
            className={`flex gap-3 w-full pt-4 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => onClose(false)}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="default"
              className="flex-1 btn-primary"
              onClick={() => {
                onConfirm(item._id);
                onClose(false);
              }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="animate-spin mr-2" />
                  {t("loading")}
                </>
              ) : (
                t("confirm")
              )}
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
