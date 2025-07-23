import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export default function TermsConditionsContent() {
  const t = useTranslations("TermsConditions");

  return (
    <div className="p-6">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
        <p className="text-muted-foreground">{t("lastUpdated")}</p>
        <p className="mt-4 text-balance">{t("intro")}</p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="container"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("definitions.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <ul className="list-disc rtl:pr-5 ltr:pl-5 space-y-2">
              <li>
                <span className="font-bold text-lg">
                  {t("definitions.service")}
                </span>
                : {t("definitions.serviceDefinition")}
              </li>
              <li>
                <span className="font-bold text-lg">
                  {t("definitions.customer")}
                </span>
                : {t("definitions.customerDefinition")}
              </li>
              <li>
                <span className="font-bold text-lg">
                  {t("definitions.user")}
                </span>
                : {t("definitions.userDefinition")}
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("serviceScope.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("serviceScope.description1")}</p>
            <p>{t("serviceScope.description2")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("intellectualProperty.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("intellectualProperty.description")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("serviceUsage.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("serviceUsage.description1")}</p>
            <p>{t("serviceUsage.description2")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("privacyData.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("privacyData.description1")}</p>
            <p>{t("privacyData.description2")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("subscriptionsPayment.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("subscriptionsPayment.description1")}</p>
            <p>{t("subscriptionsPayment.description2")}</p>
            <p>{t("subscriptionsPayment.description3")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("disclaimer.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("disclaimer.description")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("modifications.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("modifications.description")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger dir="auto" className="font-bold text-lg">
            {t("governingLaw.title")}
          </AccordionTrigger>
          <AccordionContent
            dir="auto"
            className="flex flex-col gap-4 text-balance"
          >
            <p>{t("governingLaw.description")}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
