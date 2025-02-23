
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedProperties />
    </div>
  );
};

export default Index;
