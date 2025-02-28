
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProperties />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
