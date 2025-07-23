import React, { ReactNode } from "react";
import LandingPageHeader from "@/components/molecules/LandingPageHeader";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingPageHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
