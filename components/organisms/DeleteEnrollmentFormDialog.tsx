"use client";

import { DialogProps } from "@/types/EnrollmentForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { AlertTriangle, Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function DeleteEnrollmentFormDialog({
  isOpen,
  onClose,
  item,
  loading,
  onConfirm,
}: DialogProps) {
  const t = useTranslations("EnrollmentForm.DeleteDialog");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-md rounded-lg"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-6"
        >
          {/* Header with warning icon */}
          <DialogHeader>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-destructive/10 rounded-full">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <DialogTitle className="text-lg">{t("title")}</DialogTitle>
                <DialogDescription>{t("description")}</DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Item info (if provided) */}
          {item && (
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.email}</p>
            </div>
          )}

          {/* Action buttons */}
          <DialogFooter
            className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <Button
              variant="outline"
              onClick={() => onClose(false)}
              disabled={loading}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                onConfirm(item._id);
                onClose(false);
              }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="size-5 mr-2 animate-spin" />
                  {t("loading")}
                </>
              ) : (
                t("confirm")
              )}
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
