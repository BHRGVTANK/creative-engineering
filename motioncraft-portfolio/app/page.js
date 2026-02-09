import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050505] text-white selection:bg-red-500 selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Process />
        <Resume />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
