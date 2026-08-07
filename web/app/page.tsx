import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/landing/Hero";
import AiTools from "@/components/landing/AiTools";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">

        <Hero />

        <AiTools />

        <Features />

        <HowItWorks />

        <Pricing />

        <Testimonials />

        <FAQ />

      </main>

      <Footer />
    </>
  );
}
