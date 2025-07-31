"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import { LucideIcon } from "lucide-react";
export default function SettingsCard({
  icon: Icon,
  title,
  desc,
  link,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  link: string;
}) {
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };
  const router = useRouter();
  return (
    <motion.div
      onClick={() => router.push(link)}
      className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-1 px-7 cursor-pointer"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <Icon className="text-[#10a5b1]" />

      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-sm text-gray-500">{desc}</p>

      <motion.div className="flex justify-end" variants={arrowVariants}>
        <ArrowRight className="size-4 text-gray-600" />
      </motion.div>
    </motion.div>
  );
}
