import { Mail } from "lucide-react";
import NotificationCard from "../atoms/NotificationCard";
import { Card, CardHeader } from "../ui/card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Variants } from "framer-motion";
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;
export default function EmailNotifications() {
  const t = useTranslations("clientSettingPage.notificationSettings");
  return (
    <Card className="border border-gary-50 rounded-md w-full">
      <CardHeader className="border-b border-gray-200">
        <h1 className="flex items-center gap-2 font-bold">
          <Mail className="size-4 text-[#10a5b1]" />
          {t("emailNotifications.title")}
        </h1>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm"
        >
          {t("emailNotifications.description")}
        </motion.p>
      </CardHeader>
      <div className="space-y-3 bg-gray-50/40 p-3">
        <NotificationCard
          title={t("emailNotifications.items.dailyReports.title")}
          desc={t("emailNotifications.items.dailyReports.description")}
        />
        <NotificationCard
          title={t("emailNotifications.items.productUpdates.title")}
          desc={t("emailNotifications.items.productUpdates.description")}
        />
        <NotificationCard
          title={t("emailNotifications.items.marketingEmails.title")}
          desc={t("emailNotifications.items.marketingEmails.description")}
        />
        <NotificationCard
          title={t("emailNotifications.items.securityAlerts.title")}
          desc={t("emailNotifications.items.securityAlerts.description")}
        />
      </div>
    </Card>
  );
}
