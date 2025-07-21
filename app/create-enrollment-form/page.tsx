"use client";
import EnrollmentInstructions from "@/components/pages/EnrollmentInstructions";
import { motion } from "framer-motion";
import EnrollmentForm from "@/components/molecules/EnrollmentForm";
export default function CreateEnrollmentForm() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-20">
        <motion.div
          className="lg:col-span-2 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EnrollmentForm />
        </motion.div>

        <motion.div
          className="dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <EnrollmentInstructions />
        </motion.div>
      </div>
    </>
  );
}
