
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[70vh] bg-gradient-to-b from-secondary to-white">
      <div className="absolute inset-0 bg-black/5" />
      <div className="relative container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 animate-fade-in">
            Trouvez votre bien immobilier idéal
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Découvrez une sélection exclusive de propriétés à Lomé et ses environs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/properties">
              <Button 
                size="lg" 
                className="animate-slide-up w-full sm:w-auto" 
                style={{ animationDelay: "0.2s" }}
              >
                <Search className="mr-2 h-5 w-5" />
                Rechercher
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="animate-slide-up w-full sm:w-auto" 
                style={{ animationDelay: "0.3s" }}
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
