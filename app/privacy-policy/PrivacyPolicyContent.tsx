import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyContent() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className=" p-6">
      <Accordion
        type="single"
        collapsible
        className="w-full container"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("dataCollection.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("dataCollection.description")}</p>

            <div className="rtl:pr-4 ltr:pl-4">
              <p className="font-bold text-lg">
                {t("dataCollection.customerData")}
              </p>
              <ul className="list-disc rtl:pr-5 ltr:pl-5 space-y-2 mt-2">
                <li>{t("dataCollection.customerItems.businessName")}</li>
                <li>{t("dataCollection.customerItems.commercialRegister")}</li>
                <li>{t("dataCollection.customerItems.taxNumber")}</li>
                <li>{t("dataCollection.customerItems.contactInfo")}</li>
                <li>{t("dataCollection.customerItems.billingData")}</li>
              </ul>
            </div>

            <div className="rtl:pr-4 ltr:pl-4">
              <p className="font-bold text-lg">
                {t("dataCollection.userData")}
              </p>
              <ul className="list-disc rtl:pr-5 ltr:pl-5 space-y-2 mt-2">
                <li>{t("dataCollection.userItems.callRecordings")}</li>
                <li>{t("dataCollection.userItems.conversationTexts")}</li>
                <li>{t("dataCollection.userItems.callDetails")}</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("dataUsage.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("dataUsage.description")}</p>
            <ul className="list-disc rtl:pr-5 ltr:pl-5 space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <li key={item}>{t(`dataUsage.items.${item}`)}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("dataStorage.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <ul className="list-disc rtl:pr-5 ltr:pl-5 space-y-2">
              {[1, 2, 3].map((item) => (
                <li key={item}>{t(`dataStorage.items.${item}`)}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("dataSharing.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("dataSharing.description")}</p>
            <ul className="list-disc rtl:pr-5 ltr:pl-5 space-y-2 mt-2">
              {[1, 2, 3].map((item) => (
                <li key={item}>{t(`dataSharing.items.${item}`)}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("dataProtection.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("dataProtection.description")}</p>
            <ul className="list-disc rtl:pr-5 ltr:pl-5 space-y-2 mt-2">
              {[1, 2, 3].map((item) => (
                <li key={item}>{t(`dataProtection.items.${item}`)}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("customerRights.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("customerRights.description")}</p>
            <ul className="list-disc rtl:pr-5 ltr:pl-5 space-y-2 mt-2">
              {[1, 2, 3].map((item) => (
                <li key={item}>{t(`customerRights.items.${item}`)}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("policyChanges.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("policyChanges.description")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("contactUs.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("contactUs.description")}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
