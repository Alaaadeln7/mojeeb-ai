import { DollarSign } from "lucide-react";
import NotificationCard from "../atoms/NotificationCard";
import { Card, CardHeader } from "../ui/card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Variants } from "framer-motion";
import { Label } from "../ui/label";
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
export default function UsageBillingAlerts() {
  const t = useTranslations("clientSettingPage.notificationSettings");
  return (
    <Card className="border border-gary-50 rounded-md w-full my-5">
      <CardHeader className="border-b border-gray-200">
        <h1 className="flex items-center gap-2 font-bold">
          <DollarSign className="size-4 text-[#10a5b1]" />
          Usage & Billing Alerts
        </h1>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm"
        >
          {t("emailNotifications.description")}
        </motion.p>
      </CardHeader>
      <div className="space-y-3 bg-gray-50/40 p-3 mx-3">
        <h1 className="font-bold text-lg">Billing Alert Frequency</h1>
        <p className="text-muted-foreground text-sm">
          Choose how often you wand like to receive updates on your billing
          cycle and usage.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex items-center gap-2 border border-gray-200 rounded-md p-3 bg-white">
            <input type="radio" id="daily" name="billing" />
            <div>
              <Label htmlFor="daily">Daily</Label>
              <p className="text-muted-foreground text-sm">
                Receive alerts every day.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-gray-200 rounded-md p-3 bg-white">
            <input type="radio" id="weekly" name="billing" />
            <div>
              <Label htmlFor="weekly">Weekly</Label>
              <p className="text-muted-foreground text-sm">
                Receive alerts once a week.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-gray-200 rounded-md p-3 bg-white">
            <input type="radio" id="monthly" name="billing" />
            <div>
              <Label htmlFor="monthly">Monthly</Label>
              <p className="text-muted-foreground text-sm">
                Receive alerts once a week.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-gray-200 rounded-md p-3 bg-white">
            <input type="radio" id="never" name="billing" />
            <div>
              <Label htmlFor="never">Never</Label>
              <p className="text-muted-foreground text-sm">
                Do not receive billing frequency alerts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3 bg-gray-50/40 p-3">
        <NotificationCard
          title="Usage Exceeds Limit"
          desc="Notify me when my account usage approaches or exceeds plan limits."
        />
        <NotificationCard
          title="Task Completion Alerts"
          desc="Receive a notification when a connected task or automation finishes."
        />
        <NotificationCard
          title="New Invoice Ready"
          desc="Receive an alert when a new invoice is generated for your subscription."
        />
      </div>
    </Card>
  );
}
