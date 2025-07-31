"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import IntegrationCard from "@/components/molecules/IntegrationCard";
import googleCalenderImage from "@/public/Google_Calendar-Logo.png";
import slackImage from "@/public/slack.png";
import whatsappImage from "@/public/whatsapp.svg";
export default function IntegrationSettings() {
  const t = useTranslations("clientSettingPage.integrationSettings");
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="sm:mx-10 mt-7 mx-5"
    >
      <header className="flex">
        <Button
          className="mr-2 sm:hidden flex"
          variant="outline"
          onClick={() => router.back()}
        >
          <ArrowLeft className="size-4" />
        </Button>
        <div className="space-y-3">
          <h1 className="text-xl font-bold">{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
      </header>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <IntegrationCard
          imageSrc={slackImage}
          title={t("slack.title")}
          description={t("slack.description")}
          isNew={true}
        />

        <IntegrationCard
          imageSrc={googleCalenderImage}
          title={t("googleCalendar.title")}
          description={t("googleCalendar.description")}
          isNew={true}
        />

        <IntegrationCard
          imageSrc={whatsappImage}
          title={t("whatsapp.title")}
          description={t("whatsapp.description")}
          isNew={true}
        />
      </motion.div>
    </motion.div>
  );
}
