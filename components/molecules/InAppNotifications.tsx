import { Smartphone } from "lucide-react";
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
export default function InAppNotifications() {
  const t = useTranslations("clientSettingPage.notificationSettings");
  return (
    <Card className="border border-gary-50 rounded-md w-full my-5">
      <CardHeader className="border-b border-gray-200">
        <h1 className="flex items-center gap-2 font-bold">
          <Smartphone className="size-4 text-[#10a5b1]" />
          In-App Notifications
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
          title={"New Message Notifications"}
          desc="Get alerts for new messages or comments in your linked integrations."
        />
        <NotificationCard
          title="Task Completion Alerts"
          desc="Receive a notification when a connected task or automation finishes."
        />
        <NotificationCard
          title="Feature Usage Tips & Tutorials"
          desc="Receive in-app suggestions to help you discover and utilize features."
        />
      </div>
    </Card>
  );
}
