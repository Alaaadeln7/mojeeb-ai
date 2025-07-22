"use client";
import { useEffect, useState } from "react";
import EnrollmentFormsTable from "./EnrollmentFormsTable";
export default function EnrollmentForms() {
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const direction = document.querySelector("html").getAttribute("dir");
    setIsRTL(direction === "rtl");
  }, []);
  return (
    <section className="px-10 mt-6">
      <EnrollmentFormsTable isRTL={isRTL} />
    </section>
  );
}
