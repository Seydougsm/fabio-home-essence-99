
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MapPin, Home, Building, LandPlot, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

// Données des propriétés (identiques à celles de FeaturedProperties)
const propertiesData = [
  {
    id: 1,
    title: "Villa Moderne à Djidjolé",
    price: "150 000 000 FCFA",
    location: "Djidjolé, Lomé",
    type: "Villa",
    status: "vendre",
    reference: "08-23-DJL4R",
    imageUrl: "/lovable-uploads/4e18e10b-39b8-4019-a900-a7e5492fa40d.png",
    bedrooms: 4,
    bathrooms: 3,
    size: "350 m²",
  },
  {
    id: 2,
    title: "Appartement de Luxe",
    price: "85 000 000 FCFA",
    location: "Avenue de Pya, Lomé",
    type: "Appartement",
    status: "louer",
    reference: "08-23-PYA2L",
    imageUrl: "/lovable-uploads/cd999047-db98-4386-a55b-8028ba11fec3.png",
    bedrooms: 3,
    bathrooms: 2,
    size: "180 m²",
  },
  {
    id: 3,
    title: "Maison de Vacances",
    price: "120 000 000 FCFA",
    location: "Baguida, Lomé",
    type: "Villa",
    status: "vendre",
    reference: "09-23-BGD3V",
    imageUrl: "/lovable-uploads/9b1b13eb-339b-4192-a909-fa3e075ad78f.png",
    bedrooms: 3,
    bathrooms: 2,
    size: "220 m²",
  },
  {
    id: 4,
    title: "Terrain Commercial",
    price: "200 000 000 FCFA",
    location: "Zone Portuaire, Lomé",
    type: "Terrain",
    status: "indisponible",
    reference: "08-23-PRT1X",
    imageUrl: "/lovable-uploads/dcbb6f6e-496c-4294-a6bb-a9843ce2b2cd.png",
    bedrooms: 0,
    bathrooms: 0,
    size: "2000 m²",
  },
  {
    id: 5,
    title: "Résidence Familiale",
    price: "95 000 000 FCFA",
    location: "Agbalépédo, Lomé",
    type: "Maison",
    status: "louer",
    reference: "10-23-AGL2M",
    imageUrl: "/lovable-uploads/1b238cdd-377c-4ce7-bbb0-a04d02a3ee45.png",
    bedrooms: 4,
    bathrooms: 3,
    size: "280 m²",
  },
  {
    id: 6,
    title: "Villa Préstige avec Piscine",
    price: "250 000 000 FCFA",
    location: "Aného, Togo",
    type: "Villa",
    status: "vendre",
    reference: "11-23-ANH5P",
    imageUrl: "/lovable-uploads/447ab3a7-5cc2-48b9-859c-4f8744bed1dc.png",
    bedrooms: 5,
    bathrooms: 4,
    size: "450 m²",
  },
  {
    id: 7,
    title: "Duplex Contemporain",
    price: "180 000 000 FCFA",
    location: "Tokoin, Lomé",
    type: "Maison",
    status: "vendre",
    reference: "12-23-TKN2D",
    imageUrl: "/lovable-uploads/3cd69875-e62a-406b-8d63-32b43b0d4c14.png",
    bedrooms: 4,
    bathrooms: 3,
    size: "320 m²",
  },
  {
    id: 8,
    title: "Appartement Centre-Ville",
    price: "70 000 000 FCFA",
    location: "Centre-ville, Lomé",
    type: "Appartement",
    status: "louer",
    reference: "01-24-CVL1A",
    imageUrl: "/lovable-uploads/8e3a2ad2-8d16-4d9c-81c0-1a9550ecc66d.png",
    bedrooms: 2,
    bathrooms: 1,
    size: "110 m²",
  },
  {
    id: 9,
    title: "Terrain Constructible",
    price: "65 000 000 FCFA",
    location: "Adidogomé, Lomé",
    type: "Terrain",
    status: "vendre",
    reference: "02-24-ADG3T",
    imageUrl: "/lovable-uploads/e269cc66-ac03-4635-ab20-594cd33eed3b.png",
    bedrooms: 0,
    bathrooms: 0,
    size: "800 m²",
  },
];

const Properties = () => {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
    priceRange: [0, 300],
    bedrooms: 0,
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      type: "",
      status: "",
      priceRange: [0, 300],
      bedrooms: 0,
    });
  };

  const filteredProperties = propertiesData.filter((property) => {
    // Filtre par recherche textuelle
    if (
      filters.search &&
      !property.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      !property.location.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Filtre par type
    if (filters.type && property.type !== filters.type) {
      return false;
    }

    // Filtre par statut
    if (filters.status && property.status !== filters.status) {
      return false;
    }

    // Filtre par fourchette de prix (conversion du prix en nombre pour comparaison)
    const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, "")) / 1000000;
    if (
      propertyPrice < filters.priceRange[0] ||
      propertyPrice > filters.priceRange[1]
    ) {
      return false;
    }

    // Filtre par nombre de chambres
    if (filters.bedrooms > 0 && property.bedrooms < filters.bedrooms) {
      return false;
    }

    return true;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "vendre":
        return <Badge className="absolute top-2 left-2 bg-green-600 hover:bg-green-700">À VENDRE</Badge>;
      case "louer":
        return <Badge className="absolute top-2 left-2 bg-blue-600 hover:bg-blue-700">À LOUER</Badge>;
      case "indisponible":
        return <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">NON DISPONIBLE</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nos Propriétés</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de biens immobiliers de qualité au Togo.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtres */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filtres</h2>
                <Button variant="ghost" size="sm" onClick={resetFilters} className="text-gray-500">
                  <X className="h-4 w-4 mr-1" />
                  Réinitialiser
                </Button>
              </div>

              <div className="space-y-6">
                {/* Recherche */}
                <div>
                  <label htmlFor="search" className="block text-sm font-medium mb-2">
                    Recherche
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Quartier, ville..."
                      className="pl-9"
                      value={filters.search}
                      onChange={(e) => handleFilterChange("search", e.target.value)}
                    />
                  </div>
                </div>

                {/* Type de bien */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Type de bien
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={filters.type === "Villa" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFilterChange("type", filters.type === "Villa" ? "" : "Villa")}
                      className="flex items-center"
                    >
                      <Home className="h-4 w-4 mr-1" />
                      Villa
                    </Button>
                    <Button
                      variant={filters.type === "Appartement" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFilterChange("type", filters.type === "Appartement" ? "" : "Appartement")}
                      className="flex items-center"
                    >
                      <Building className="h-4 w-4 mr-1" />
                      Appartement
                    </Button>
                    <Button
                      variant={filters.type === "Maison" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFilterChange("type", filters.type === "Maison" ? "" : "Maison")}
                      className="flex items-center"
                    >
                      <Home className="h-4 w-4 mr-1" />
                      Maison
                    </Button>
                    <Button
                      variant={filters.type === "Terrain" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFilterChange("type", filters.type === "Terrain" ? "" : "Terrain")}
                      className="flex items-center"
                    >
                      <LandPlot className="h-4 w-4 mr-1" />
                      Terrain
                    </Button>
                  </div>
                </div>

                {/* Statut */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Statut
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={filters.status === "vendre" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFilterChange("status", filters.status === "vendre" ? "" : "vendre")}
                    >
                      À vendre
                    </Button>
                    <Button
                      variant={filters.status === "louer" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFilterChange("status", filters.status === "louer" ? "" : "louer")}
                    >
                      À louer
                    </Button>
                  </div>
                </div>

                {/* Prix */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium">
                      Fourchette de prix (millions FCFA)
                    </label>
                    <span className="text-sm text-gray-500">
                      {filters.priceRange[0]} - {filters.priceRange[1]}
                    </span>
                  </div>
                  <Slider
                    defaultValue={[0, 300]}
                    value={filters.priceRange}
                    min={0}
                    max={300}
                    step={5}
                    onValueChange={(value) => handleFilterChange("priceRange", value)}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0</span>
                    <span>150</span>
                    <span>300+</span>
                  </div>
                </div>

                {/* Chambres */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Chambres minimum
                  </label>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <Button
                        key={num}
                        variant={filters.bedrooms === num ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleFilterChange("bedrooms", num)}
                        className="h-8 w-8 p-0"
                      >
                        {num === 0 ? "Tous" : num}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des propriétés */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {filteredProperties.length} {filteredProperties.length > 1 ? "Résultats" : "Résultat"}
              </h2>
              <div className="text-sm text-gray-500">
                Triés par: <span className="font-medium">Récents d'abord</span>
              </div>
            </div>

            {filteredProperties.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <Search className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Aucun bien ne correspond à vos critères</h3>
                <p className="text-gray-600 mb-4">Essayez de modifier vos filtres pour voir plus de résultats.</p>
                <Button onClick={resetFilters}>Réinitialiser les filtres</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      {getStatusBadge(property.status)}
                      <img
                        src={property.imageUrl}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="text-xl font-semibold line-clamp-1">{property.title}</h3>
                      <p className="text-primary font-bold">{property.price}</p>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600 line-clamp-1">{property.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        {property.bedrooms > 0 && (
                          <span>{property.bedrooms} Chambres</span>
                        )}
                        {property.bathrooms > 0 && (
                          <span>{property.bathrooms} SDB</span>
                        )}
                        <span>{property.size}</span>
                      </div>
                      <p className="text-xs text-gray-400">Référence: {property.reference}</p>
                      <Link to={`/properties/${property.id}`}>
                        <Button className="w-full mt-4">
                          Voir les détails
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
