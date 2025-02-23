
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Villa Moderne à Djidjolé",
      price: "150 000 000 FCFA",
      location: "Djidjolé, Lomé",
      type: "Villa",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Appartement de Luxe",
      price: "85 000 000 FCFA",
      location: "Avenue de Pya, Lomé",
      type: "Appartement",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "Terrain Commercial",
      price: "200 000 000 FCFA",
      location: "Zone Portuaire, Lomé",
      type: "Terrain",
      imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nos Biens Immobiliers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-primary font-bold">{property.price}</p>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-sm text-gray-500">{property.type}</p>
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
