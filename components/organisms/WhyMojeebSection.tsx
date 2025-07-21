"use client";

import { useTranslations } from "next-intl";
import { WhyMojeebCard } from "../molecules/WhyMojeebCard";
import { motion } from "framer-motion";
import { BrainCircuit, Clock, Gauge, MessageSquare } from "lucide-react";

export default function WhyMojeebSection() {
  const t = useTranslations("WhyMojeebSection");

  const features = [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: t("monitoring.title"),
      description: t("monitoring.description"),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("hours.title"),
      description: t("hours.description"),
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: t("readiness.title"),
      description: t("readiness.description"),
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: t("assistant.title"),
      description: t("assistant.description"),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <WhyMojeebCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
