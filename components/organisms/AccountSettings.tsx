"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
export default function AccountSettings() {
  const t = useTranslations("clientSettingPage.AccountPage");
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
      dir={t("dir")} // RTL/LTR support
    >
      <motion.h1 variants={itemVariants} className="text-2xl font-bold mb-1">
        <Button
          className="mr-2 sm:hidden flex"
          variant="outline"
          onClick={() => router.back()}
        >
          <ArrowLeft className="size-4" />
        </Button>{" "}
        {t("title")}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-muted-foreground text-sm"
      >
        {t("subtitle")}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="my-10 border border-gray-200 p-4 rounded-lg shadow-sm"
      >
        <h2 className="text-xl font-semibold mt-5">{t("profileSection")}</h2>
        <p className="text-muted-foreground mb-6 mt-2">
          {t("profileDescription")}
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="block text-sm font-medium mb-2">
                {t("fullName")}
              </Label>
              <Input value="Jane Dee" readOnly />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-2">
                {t("email")}
              </Label>
              <Input value="jane.dee@example.com" readOnly />
              <p className="text-sm text-muted-foreground mt-2">
                {t("emailNote")}
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t("bio")}</label>
            <Textarea value={t("bioContent")} className="min-h-[100px]" />
            <p className="text-sm text-muted-foreground mt-2">
              {t("bioDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="block text-sm font-medium mb-2">
                {t("phone")}
              </Label>
              <Input value="+1 (393) 123-4507" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-2">
                {t("location")}
              </Label>
              <Input value="New York, USA" />
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-end gap-4 pt-6 border-t"
          >
            <Button variant="outline">{t("cancel")}</Button>
            <Button className="bg-[#10a5b1] hover:bg-[#3e8388]">
              {t("save")}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
