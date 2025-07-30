"use client";
import AddDescriptionScriptDialog from "@/components/organisms/AddDescriptionScriptDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Pencil, Plus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface DescriptionData {
  description: string;
}

export default function DescriptionScript({
  description,
}: {
  description: string;
}) {
  const t = useTranslations("DescriptionScript");
  const router = useRouter();
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [descriptionData, setDescriptionData] =
    useState<DescriptionData | null>({
      description: t("defaultDescription"),
    });

  const handleSaveDescription = async (values: DescriptionData) => {
    setDescriptionData(values);
    setOpenAddDialog(false);
    setIsEditing(false);
    router.refresh();
  };

  const handleEdit = () => {
    setIsEditing(true);
    setOpenAddDialog(true);
  };

  const isRTL = router?.locale === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="space-y-4">
      <div
        className={`flex justify-between items-center ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        <h2 className="text-xl font-semibold">{t("heading")}</h2>
        {descriptionData ? (
          <Button
            onClick={handleEdit}
            variant="outline"
            className={`flex items-center gap-2 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Pencil className="w-4 h-4" />
            {t("editButton")}
          </Button>
        ) : (
          <Button
            onClick={() => setOpenAddDialog(true)}
            className={`colored-btn flex items-center gap-2 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Plus className="w-4 h-4" />
            {t("addButton")}
          </Button>
        )}
      </div>

      {descriptionData ? (
        <Card className="p-6">
          <div
            className={`flex items-start gap-4 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <div className="bg-blue-50 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-600 whitespace-pre-line">{description}</p>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-8 text-center border-dashed border-2">
          <FileText className="w-10 h-10 mx-auto text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            {t("emptyState.title")}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {t("emptyState.description")}
          </p>
          <Button
            onClick={() => setOpenAddDialog(true)}
            className={`mt-6 colored-btn flex items-center gap-2 mx-auto ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Plus className="w-4 h-4" />
            {t("addButton")}
          </Button>
        </Card>
      )}

      <AddDescriptionScriptDialog
        open={openAddDialog}
        onClose={() => {
          setOpenAddDialog(false);
          setIsEditing(false);
        }}
        onSubmit={handleSaveDescription}
        initialValues={
          isEditing && descriptionData ? descriptionData : undefined
        }
        isEditing={isEditing}
      />
    </div>
  );
}
