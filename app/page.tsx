// import { useTranslations } from "next-intl";
import Hero from "@/components/molecules/Hero";
import LandingPageHeader from "@/components/molecules/LandingPageHeader";
import Features from "@/components/molecules/Features";
export default function HomePage() {
  return (
    <div>
      <LandingPageHeader />
      <Hero />
      <Features />
    </div>
  );
}
