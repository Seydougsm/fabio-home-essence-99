
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Villa Moderne à Djidjolé",
      price: "150 000 000 FCFA",
      location: "Djidjolé, Lomé",
      type: "Villa",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Appartement de Luxe",
      price: "85 000 000 FCFA",
      location: "Avenue de Pya, Lomé",
      type: "Appartement",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Terrain Commercial",
      price: "200 000 000 FCFA",
      location: "Zone Portuaire, Lomé",
      type: "Terrain",
      imageUrl: "/placeholder.svg",
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
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-primary font-bold">{property.price}</p>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-sm text-gray-500">{property.type}</p>
                <Button className="w-full mt-4">
                  Voir les détails
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
