import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import ValueProps from "@/components/ValueProps";
import ProductCategories from "@/components/ProductCategories";
import Manifesto from "@/components/Manifesto";
import Testimonials from "@/components/Testimonials";
import AnimatedCounter from "@/components/AnimatedCounter";
import BlogPreview from "@/components/BlogPreview";
import InstagramGrid from "@/components/InstagramGrid";
import Newsletter from "@/components/Newsletter";
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
        <ProductCategories />
        <Manifesto />
        <Testimonials />
        <AnimatedCounter />
        <BlogPreview />
        <InstagramGrid />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <ScrollToTop />
    </>
  );
}
