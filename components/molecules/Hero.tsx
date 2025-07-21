import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Hero");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const background = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.85,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  const buttonTap = {
    scale: 0.98,
  };

  return (
    <section className="relative w-full h-screen bg-[#000] overflow-hidden">
      {/* Animated Background */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={background}
        className="absolute inset-0 bg-[url('/landingPageImage.jpg')] bg-cover bg-center"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-start text-center p-6"
      >
        {/* Title with staggered animation */}
        <motion.h1
          variants={item}
          className="text-3xl w-screen md:text-6xl text-start font-bold text-white mb-6 drop-shadow-lg"
        >
          {t("title")}
        </motion.h1>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center gap-4 w-full"
        >
          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white cursor-pointer text-lg px-8 py-6">
              {t("getStarted")}
            </Button>
          </motion.div>

          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Button className="bg-gray-600 hover:bg-gray-700 text-white cursor-pointer text-lg px-8 py-6 gap-2">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Play className="size-5" />
              </motion.div>
              {t("listen")}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
