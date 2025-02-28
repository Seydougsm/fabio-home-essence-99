
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/properties?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/properties");
    }
  };

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
          
          <form onSubmit={handleSearch} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  className="pl-10 h-12 w-full"
                  placeholder="Que recherchez-vous ?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Rechercher
              </Button>
            </div>
          </form>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/properties">
              <Button 
                variant="outline"
                size="lg" 
                className="animate-slide-up w-full sm:w-auto" 
                style={{ animationDelay: "0.3s" }}
              >
                Voir toutes les propriétés
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="animate-slide-up w-full sm:w-auto" 
                style={{ animationDelay: "0.4s" }}
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
