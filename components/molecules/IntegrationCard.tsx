"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

interface IntegrationCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  isNew?: boolean;
}

export default function IntegrationCard({
  imageSrc,
  title,
  description,
  isNew = false,
}: IntegrationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl p-5 border border-gray-200 dark:border-gray-700 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <Image
          src={imageSrc}
          alt={`${title} logo`}
          className="object-contain w-10"
        />
        {isNew && (
          <span className="px-3 py-1 text-xs font-medium text-[#10a5b1] bg-[#10a5b1]/20 rounded-full">
            New
          </span>
        )}
      </div>

      <div className="space-y-2">
        <h2 className="font-bold text-xl capitalize">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
      </div>

      <Button
        variant="default"
        className="mt-auto w-full bg-[#10a5b1] hover:bg-[#0d8c97] transition-colors"
      >
        Add
      </Button>
    </motion.div>
  );
}
