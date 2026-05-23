import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import ProductPhilosophy from "@/components/home/ProductPhilosophy";
import PlatformSupport from "@/components/home/PlatformSupport";
import ProductGrid from "@/components/home/ProductGrid";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProduct />
        <ProductPhilosophy />
        <PlatformSupport />
        <ProductGrid />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
