import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import callIcon from "../../public/featuresImages/call.png";
import aiNetwork from "../../public/featuresImages/ai-network.png";
import settings from "../../public/featuresImages/settings.png";
import bell from "../../public/featuresImages/bell.png";
import translate from "../../public/featuresImages/translate.png";
import analysis from "../../public/featuresImages/analysis.png";

export default function Features() {
  const t = useTranslations("Features");

  const features = [
    {
      description: t("feature1.description"),
      icon: callIcon,
    },
    {
      description: t("feature2.description"),
      icon: aiNetwork,
    },
    {
      description: t("feature3.description"),
      icon: settings,
    },
    {
      description: t("feature4.description"),
      icon: bell,
    },
    {
      description: t("feature4.description"),
      icon: translate,
      image: "/feature4.jpg",
    },
    {
      description: t("feature4.description"),
      icon: analysis,
    },
  ];

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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full py-16 bg-teal-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleAnimation}
          className="text-3xl font-bold text-start text-[#10a5b1] mb-12"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="dark:bg-gray-700 bg-white p-6 flex items-center gap-3 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <motion.div whileHover={{ rotate: 10 }} whileTap={{ scale: 0.9 }}>
                <Image
                  src={feature.icon}
                  alt={feature.description}
                  className="w-10 h-10"
                />
              </motion.div>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
