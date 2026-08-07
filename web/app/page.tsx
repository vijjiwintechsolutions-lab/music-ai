import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AiTools from "@/components/landing/AiTools";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/layout/Footer";

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
