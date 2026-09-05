import { About } from "@/components/home/about";
import { CtaBand } from "@/components/home/cta-band";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { Services } from "@/components/home/services";
import { Testimonial } from "@/components/home/testimonial";
import { TrustedBy } from "@/components/home/trusted-by";
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
        <TrustedBy />
        <Services />
        <SelectedWork />
        <Features />
        <About />
        <Testimonial />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
