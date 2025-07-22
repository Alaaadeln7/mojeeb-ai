"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { EnrollmentFormItemData } from "@/types/EnrollmentForm";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Building2,
  Users,
  FileText,
  DollarSign,
  Globe,
  Info,
  Clock,
  CheckCircle,
  Calendar,
  XCircle,
} from "lucide-react";
import { Badge } from "../ui/badge";

interface Props {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  item: EnrollmentFormItemData;
}

export default function SingleEnrollmentFormDialog({
  isOpen,
  onClose,
  item,
}: Props) {
  const t = useTranslations("EnrollmentForm");
  const locale = useLocale();
  const isRTL = locale === "ar";

  if (!item) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const getStatusIcon = () => {
    switch (item.status) {
      case "pending":
        return <Clock className="h-5 w-5 text-amber-500" />;
      case "approved":
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case "rejected":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getStatusBadge = () => {
    switch (item.status) {
      case "pending":
        return "info";
      case "approved":
        return "success";
      case "rejected":
        return "destructive";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl rounded-3xl p-0 overflow-hidden border-0"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.div
          className="bg-background rounded-3xl shadow-2xl w-full overflow-hidden relative"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <DialogHeader className="bg-gradient-to-r from-primary to-primary/90 p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
            <div className="relative flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-3 border">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <DialogTitle className="text-2xl text-primary-foreground">
                    {t("Dialog.title")}
                  </DialogTitle>
                  <DialogDescription className="text-primary-foreground/90">
                    {t("Dialog.description")}
                  </DialogDescription>
                </div>
              </div>
              <Badge variant={getStatusBadge()}>
                <div className="flex items-center gap-2">
                  {getStatusIcon()}
                  {t(`Status.${item.status}`)}
                </div>
              </Badge>
            </div>
          </DialogHeader>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Applicant Info */}
              <motion.div
                variants={itemVariants}
                className="bg-secondary/30 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-2">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  {t("Dialog.applicantInfo")}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard
                    icon={<User className="h-5 w-5 text-blue-600" />}
                    title={t("Dialog.name")}
                    value={item.name}
                    iconBg="bg-blue-100"
                  />
                  <InfoCard
                    icon={<Building2 className="h-5 w-5 text-blue-600" />}
                    title={t("Dialog.company")}
                    value={item.company}
                    iconBg="bg-blue-100"
                  />

                  <div className="bg-background rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`bg-red-100 rounded-lg p-2`}>
                        <Mail className="h-5 w-5 text-red-600" />
                      </div>
                      <span className="font-semibold">{t("Dialog.email")}</span>
                    </div>
                    <a
                      href={`mailto:${item.email}`}
                      className={`ml-11 text-blue-600 hover:underline`}
                    >
                      {item.email}
                    </a>
                  </div>
                  <InfoCard
                    icon={<Calendar className="h-5 w-5 text-purple-600" />}
                    title={t("Dialog.createdAt")}
                    value={new Date(item.createdAt).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    iconBg="bg-purple-100"
                  />
                  <InfoCard
                    icon={<Calendar className="h-5 w-5 text-green-600" />}
                    title={t("Dialog.updatedAt")}
                    value={new Date(item.updatedAt).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    iconBg="bg-green-100"
                  />
                  <InfoCard
                    icon={<MapPin className="h-5 w-5 text-green-600" />}
                    title={t("Dialog.address")}
                    value={item.address}
                    iconBg="bg-green-100"
                  />
                  <InfoCard
                    icon={<Phone className="h-5 w-5 text-purple-600" />}
                    title={t("Dialog.phone")}
                    value={item.phone}
                    iconBg="bg-purple-100"
                    isMono
                  />
                  <InfoCard
                    icon={<Briefcase className="h-5 w-5 text-purple-600" />}
                    title={t("Dialog.industry")}
                    value={item.industry}
                    iconBg="bg-purple-100"
                    isMono
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-secondary/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-2">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">{t("Dialog.website")}</span>
              </div>
              <div className="bg-background rounded-xl p-4 shadow-sm">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline transition-colors "
                >
                  {item.website}
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-secondary/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-2">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">{t("Dialog.message")}</span>
              </div>
              <div className="bg-background rounded-xl p-4 shadow-sm">
                <p className="leading-relaxed">{item.message}</p>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <DialogFooter className="px-6 pb-6">
            <Button variant="destructive" onClick={() => onClose(false)}>
              {t("Dialog.close")}
            </Button>
            <Button className="btn-primary">
              {t("Dialog.actions.primary")}
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

function InfoCard({
  icon,
  title,
  value,
  iconBg,
  isMono,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  iconBg: string;
  isMono?: boolean;
}) {
  return (
    <div className="bg-background rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className={`${iconBg} rounded-lg p-2`}>{icon}</div>
        <span className="font-semibold">{title}</span>
      </div>
      <p className={`ml-11 ${isMono ? "font-mono" : ""}`}>{value}</p>
    </div>
  );
}
