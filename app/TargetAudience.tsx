import { useTranslations } from "next-intl";

export default function TargetedSectors() {
  const t = useTranslations("targetedSectors");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">
            {t("educationInstitutes")}
          </h2>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">{t("tourismHotels")}</h2>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">{t("hospitals")}</h2>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">{t("companies")}</h2>
        </div>
      </div>
    </div>
  );
}
