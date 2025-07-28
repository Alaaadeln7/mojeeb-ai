"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ConfirmDeleteDialog({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const t = useTranslations("ConfirmDeleteDialog");
  const router = useRouter();

  const isRTL = router.locale === "ar";

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent dir={isRTL ? "rtl" : "ltr"}>
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <DialogFooter className={isRTL ? "flex-row-reverse" : ""}>
          <Button
            variant="destructive"
            className="rounded-4xl"
            onClick={onClose}
          >
            {t("cancel")}
          </Button>
          <Button
            variant="outline"
            className="colored-btn text-shadow-sidebar-accent-foreground"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {t("confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
