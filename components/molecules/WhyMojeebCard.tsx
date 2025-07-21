"use client";

import { motion } from "framer-motion";

interface WhyMojeebCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const WhyMojeebCard = ({
  icon,
  title,
  description,
  index,
}: WhyMojeebCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="text-[#10a5b1] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};
