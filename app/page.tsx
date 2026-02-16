import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import ValueProps from "@/components/ValueProps";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Experiences from "@/components/Experiences";
import Manifesto from "@/components/Manifesto";
import Testimonials from "@/components/Testimonials";
import AnimatedCounter from "@/components/AnimatedCounter";
import InstagramGrid from "@/components/InstagramGrid";
import BlogPreview from "@/components/BlogPreview";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <ValueProps />
        <Services />
        <Process />
        <Experiences />
        <Manifesto />
        <Testimonials />
        <AnimatedCounter />
        <InstagramGrid />
        <BlogPreview />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <ScrollToTop />
    </>
  );
}
