"use client";
import SettingsCard from "@/components/molecules/SettingsCard";
import { BellRing, Languages, Share2, User } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Settings() {
  const t = useTranslations("clientSettingPage");
  return (
    <>
      <header className="p-8 flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-sm text-muted-foreground">{t("subTitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
          <SettingsCard
            icon={User}
            title={t("accountTitle")}
            desc={t("accountDesc")}
            link="settings/account"
          />
          <SettingsCard
            icon={Languages}
            title={t("voiceTitle")}
            desc={t("voiceDesc")}
            link="settings/voice-preference"
          />
          <SettingsCard
            icon={Share2}
            title={t("integrationTitle")}
            desc={t("integrationDesc")}
            link="settings/integration-settings"
          />
          <SettingsCard
            icon={BellRing}
            title={t("notificationPreferences")}
            desc={t("notificationPreferencesDesc")}
            link="settings/notifications-preference"
          />
        </div>
      </header>
    </>
  );
}
