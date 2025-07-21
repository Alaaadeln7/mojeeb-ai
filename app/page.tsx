"use client";
import Hero from "@/components/molecules/Hero";
import LandingPageHeader from "@/components/molecules/LandingPageHeader";
import Features from "@/components/molecules/Features";
// import useAuth from "@/hooks/useAuth";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import WhyMojeebSection from "../components/organisms/WhyMojeebSection";
import TargetedSectors from "@/components/organisms/TargetAudience";
export default function HomePage() {
  // const { user } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (user) {
  //     const redirectPath = getRedirectPath(user?.role);
  //     if (redirectPath !== window.location.pathname) {
  //       router.push(redirectPath);
  //     }
  //   }
  // }, [user, router]);

  // const getRedirectPath = (role: string) => {
  //   switch (role) {
  //     case "admin":
  //       return "/admin-dashboard";
  //     case "client":
  //       return "/client-dashboard";
  //     default:
  //       return "/";
  //   }
  // };
  return (
    <div className="overflow-x-hidden">
      <LandingPageHeader />
      <Hero />
      <Features />
      <WhyMojeebSection />
      <TargetedSectors />
    </div>
  );
}
