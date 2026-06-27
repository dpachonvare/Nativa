import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import VipSection from "@/components/VipSection";
import {
  ClimateEmpathy,
  Promise as PromiseSection,
  RocioHero,
  ScienceSoul,
  RitualsHome,
  SpfHonesty,
} from "@/components/HomeSections";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ClimateEmpathy />
        <PromiseSection />
        <RocioHero />
        <ScienceSoul />
        <RitualsHome />
        <SpfHonesty />
        <VipSection namespace="home.vip" source="home" />
      </main>
      <Footer />
    </>
  );
}
