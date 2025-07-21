"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Lightbulb,
  CheckCircle,
  Info,
  ClipboardList,
  Building,
  Globe,
  MapPin,
  Scale,
  Mail,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const InstructionItem = ({ icon, title, children }) => (
  <div className="flex items-start space-x-3 rtl:space-x-reverse">
    <div className="flex-shrink-0 text-primary">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-800 dark:text-white mx-1">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{children}</p>
    </div>
  </div>
);

const EnrollmentInstructions = () => {
  const t = useTranslations("EnrollmentInstructions");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gray-50 dark:bg-gray-800 border-primary/20 shadow-sm">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <Lightbulb className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl">{t("title")}</CardTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardDescription>{t("description")}</CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200 flex items-center">
              <Info className="h-5 w-5 mr-2 text-red-500" />
              {t("requirementsTitle")}
            </h3>
            <div className="space-y-4 pl-2 border-r-2 border-red-500 dark:border-red-400 pr-4">
              <InstructionItem
                icon={<ClipboardList className="h-5 w-5 text-red-500" />}
                title={t("formCompleteTitle")}
              >
                {t("formCompleteDescription")}
              </InstructionItem>
              <InstructionItem
                icon={<Building className="h-5 w-5 text-red-500" />}
                title={t("companyInfoTitle")}
              >
                {t("companyInfoDescription")}
              </InstructionItem>
              <InstructionItem
                icon={<Globe className="h-5 w-5 text-red-500" />}
                title={t("validWebsiteTitle")}
              >
                {t("validWebsiteDescription")}
              </InstructionItem>
              <InstructionItem
                icon={<MapPin className="h-5 w-5 text-red-500" />}
                title={t("addressTitle")}
              >
                {t("addressDescription")}
              </InstructionItem>
              <InstructionItem
                icon={<Scale className="h-5 w-5 text-red-500" />}
                title={t("legalTitle")}
              >
                {t("legalDescription")}
              </InstructionItem>
            </div>
          </motion.div>

          <motion.hr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="my-6 border-gray-200 dark:border-gray-700"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
              {t("tipsTitle")}
            </h3>
            <div className="space-y-4 pl-2 border-r-2 border-green-500 dark:border-green-400 pr-4">
              <InstructionItem
                icon={<CheckCircle className="h-5 w-5 text-green-500" />}
                title={t("contactInfoTitle")}
              >
                {t("contactInfoDescription")}
              </InstructionItem>
              <InstructionItem
                icon={<CheckCircle className="h-5 w-5 text-green-500" />}
                title={t("detailedDescriptionTitle")}
              >
                {t("detailedDescriptionDescription")}
              </InstructionItem>
              <InstructionItem
                icon={<CheckCircle className="h-5 w-5 text-green-500" />}
                title={t("verificationTitle")}
              >
                {t("verificationDescription")}
              </InstructionItem>
              <InstructionItem
                icon={<CheckCircle className="h-5 w-5 text-green-500" />}
                title={t("processingTimeTitle")}
              >
                {t("processingTimeDescription")}
              </InstructionItem>
            </div>
          </motion.div>

          <motion.hr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="my-6 border-gray-200 dark:border-gray-700"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-blue-500" />
              {t("contactTitle")}
            </h3>
            <div className="space-y-4 pl-2 border-r-2 border-blue-500 dark:border-blue-400 pr-4">
              <InstructionItem
                icon={<Mail className="h-5 w-5 text-blue-500" />}
                title={t("emailTitle")}
              >
                {t("emailDescription")}
              </InstructionItem>
              <InstructionItem
                icon={<Phone className="h-5 w-5 text-blue-500" />}
                title={t("phoneTitle")}
              >
                {t("phoneDescription")}
              </InstructionItem>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnrollmentInstructions;
