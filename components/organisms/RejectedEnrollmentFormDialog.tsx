"use client";

import { DialogProps } from "@/types/EnrollmentForm";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { AlertTriangle, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
// import { useLocale } from "next-intl";

export default function RejectedEnrollmentFormDialog({
  isOpen,
  onClose,
  loading,
  onConfirm,
  item,
}: DialogProps) {
  const t = useTranslations("EnrollmentForm.RejectionDialog");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-sm rounded-lg p-6"
        // dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="p-3 bg-destructive/10 rounded-full">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{t("title")}</h3>
            <p className="text-sm text-muted-foreground">{t("message")}</p>
          </div>

          <div
            className={`flex gap-3 w-full pt-4 ${
              true ? "flex-row-reverse" : ""
            }`}
          >
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onClose(false)}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="destructive"
              className="flex-1"
              disabled={loading}
              onClick={() => {
                onConfirm(item._id);
                onClose(false);
              }}
            >
              {loading ? (
                <>
                  <Loader className="size-5 animate-spin" />
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
