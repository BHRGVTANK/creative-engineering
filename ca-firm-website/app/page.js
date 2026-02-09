
import Hero from "@/components/sections/hero";
import TrustIndicators from "@/components/sections/trust-indicators";
import AboutPreview from "@/components/sections/about-preview";
import ServicesGrid from "@/components/sections/services-grid";
import WhyChooseMe from "@/components/sections/why-choose-me";
import Process from "@/components/sections/process";
import IndustriesServed from "@/components/sections/industries-served";
import CTABanner from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseMe />
      <Process />
      <IndustriesServed />
      <CTABanner />
    </>
  );
}
