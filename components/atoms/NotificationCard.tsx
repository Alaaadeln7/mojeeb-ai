import { Switch } from "../ui/switch";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;
export default function NotificationCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      className="flex items-center justify-between border border-gray-200 p-3 pl-5  bg-white rounded-xl"
    >
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
      <Switch className="data-[state=checked]:bg-[#10a5b1] data-[state=unchecked]:bg-gray-400" />
    </motion.div>
  );
}
