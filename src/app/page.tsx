import { About } from "@/components/home/about";
import { CtaBand } from "@/components/home/cta-band";
import { Devices } from "@/components/home/devices";
import { Faq } from "@/components/home/faq";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Network } from "@/components/home/network";
import { Plans } from "@/components/home/plans";
import { Testimonial } from "@/components/home/testimonial";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Network />
        <About />
        <Plans />
        <Testimonial />
        <Devices />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
