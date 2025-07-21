"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { targetedSectorsData } from "@/constants";
import Image from "next/image";

export default function TargetedSectors() {
  const t = useTranslations("targetedSectors");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 dark:bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#10a5b1]"
      >
        {t("title")}
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {targetedSectorsData?.map((sector) => (
          <motion.div
            key={sector.id}
            variants={item}
            whileHover={cardHover}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm bg-white dark:bg-gray-800 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                <Image
                  src={sector.icon}
                  alt={sector.title}
                  className="w-10 h-10"
                />
              </div>
              <h2 className="text-xl font-semibold ml-3 my-2 text-gray-800 dark:text-white">
                {t(`sectors.${sector.id}.title`)}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t(`sectors.${sector.id}.description`)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
