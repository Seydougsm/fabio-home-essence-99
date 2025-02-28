
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Villa Moderne à Djidjolé",
      price: "150 000 000 FCFA",
      location: "Djidjolé, Lomé",
      type: "Villa",
      status: "vendre",
      reference: "08-23-DJL4R",
      imageUrl: "/lovable-uploads/4e18e10b-39b8-4019-a900-a7e5492fa40d.png",
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
    },
  ];

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
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nos Biens Immobiliers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
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
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-primary font-bold">{property.price}</p>
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{property.location}</span>
                </div>
                <p className="text-sm text-gray-500">{property.type}</p>
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
        <div className="text-center mt-8">
          <Link to="/properties">
            <Button variant="outline" size="lg">
              Voir toutes nos propriétés
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
