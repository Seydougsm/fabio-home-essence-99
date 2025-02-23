
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-secondary to-white">
      <div className="absolute inset-0 bg-black/5" />
      <div className="relative container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Trouvez votre bien immobilier idéal
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez une sélection exclusive de propriétés à Lomé et ses environs
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Search className="mr-2 h-5 w-5" />
              Rechercher
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
