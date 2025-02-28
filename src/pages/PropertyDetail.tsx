
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Bath, Ruler, Calendar, DownloadCloud, Share2 } from "lucide-react";
import { Footer } from "@/components/Footer";

// Données des propriétés (à remplacer par les appels API dans une application réelle)
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
    images: [
      "/lovable-uploads/4e18e10b-39b8-4019-a900-a7e5492fa40d.png",
      "/lovable-uploads/cd999047-db98-4386-a55b-8028ba11fec3.png",
      "/lovable-uploads/9b1b13eb-339b-4192-a909-fa3e075ad78f.png"
    ],
    bedrooms: 4,
    bathrooms: 3,
    size: "350 m²",
    yearBuilt: 2020,
    description: "Magnifique villa moderne située dans un quartier prisé de Lomé. Cette propriété offre un cadre de vie exceptionnel avec ses 4 chambres spacieuses, son salon lumineux et sa cuisine équipée. Le jardin paysager et la piscine en font un lieu idéal pour se détendre en famille.",
    features: [
      "Piscine privée",
      "Jardin paysager",
      "Garage pour 2 voitures",
      "Système d'alarme",
      "Climatisation centralisée",
      "Cuisine équipée",
      "Dépendance pour personnel"
    ]
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
    images: [
      "/lovable-uploads/cd999047-db98-4386-a55b-8028ba11fec3.png",
      "/lovable-uploads/1b238cdd-377c-4ce7-bbb0-a04d02a3ee45.png",
      "/lovable-uploads/dcbb6f6e-496c-4294-a6bb-a9843ce2b2cd.png"
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: "180 m²",
    yearBuilt: 2018,
    description: "Superbe appartement de standing dans une résidence sécurisée au cœur de Lomé. Très lumineux et parfaitement agencé, il offre un cadre de vie idéal avec ses 3 chambres dont une suite parentale, son salon spacieux et sa cuisine américaine entièrement équipée.",
    features: [
      "Résidence sécurisée 24/7",
      "Ascenseur",
      "Balcon avec vue dégagée",
      "Parking souterrain",
      "Climatisation",
      "Cuisine américaine équipée",
      "Salle de sport commune"
    ]
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
    images: [
      "/lovable-uploads/9b1b13eb-339b-4192-a909-fa3e075ad78f.png",
      "/lovable-uploads/3cd69875-e62a-406b-8d63-32b43b0d4c14.png",
      "/lovable-uploads/8e3a2ad2-8d16-4d9c-81c0-1a9550ecc66d.png"
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: "220 m²",
    yearBuilt: 2019,
    description: "Charmante villa de vacances située à Baguida, à quelques pas de la plage. Cette propriété bénéficie d'un environnement calme et verdoyant, parfait pour se ressourcer. Avec ses 3 chambres confortables et sa terrasse spacieuse, c'est l'endroit idéal pour profiter du climat togolais.",
    features: [
      "Accès direct à la plage",
      "Terrasse vue mer",
      "Jardin tropical",
      "Douche extérieure",
      "Climatisation",
      "Cuisine d'été",
      "Parking privatif"
    ]
  }
];

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    // Simuler un chargement des données
    setTimeout(() => {
      const foundProperty = propertiesData.find(p => p.id === parseInt(id, 10));
      setProperty(foundProperty);
      setMainImage(foundProperty?.images[0] || "");
      setLoading(false);
    }, 500);
  }, [id]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "vendre":
        return <Badge className="bg-green-600 hover:bg-green-700">À VENDRE</Badge>;
      case "louer":
        return <Badge className="bg-blue-600 hover:bg-blue-700">À LOUER</Badge>;
      case "indisponible":
        return <Badge className="bg-red-600 hover:bg-red-700">NON DISPONIBLE</Badge>;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16 flex items-center justify-center">
          <div className="animate-pulse space-y-8 w-full max-w-6xl">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Propriété non trouvée</h1>
          <p className="text-gray-600 mb-8">La propriété que vous recherchez n'existe pas ou a été retirée.</p>
          <Link to="/properties">
            <Button>Retour aux propriétés</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Images et galerie */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src={mainImage} 
                alt={property.title} 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mb-8">
              {property.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`p-1 rounded border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                >
                  <img 
                    src={img} 
                    alt={`Vue ${index + 1}`} 
                    className="h-24 w-full object-cover rounded"
                  />
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {property.description}
              </p>

              <h3 className="text-xl font-bold mb-3">Caractéristiques</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 mb-6">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="mr-2 text-primary">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Localisation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Localisation</h2>
              <div className="h-72 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{ border: 0 }} 
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63520.88443348112!2d1.168572!3d6.173738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x3224b5422caf411d!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2sus!4v1683022830976!5m2!1sfr!2sus`} 
                  allowFullScreen 
                  title="Localisation de la propriété"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Détails et contact */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-24">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold">{property.title}</h1>
                <div className="flex space-x-2">
                  <button className="p-2 rounded hover:bg-gray-100" title="Partager">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded hover:bg-gray-100" title="Télécharger la brochure">
                    <DownloadCloud className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{property.location}</span>
              </div>

              <div className="border-t border-b border-gray-200 py-4 my-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Type</span>
                    <div className="flex items-center mt-1">
                      <Home className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">{property.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Statut</span>
                    <div className="mt-1">
                      {getStatusBadge(property.status)}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Chambres</span>
                    <div className="flex items-center mt-1">
                      <span className="font-medium">{property.bedrooms}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Salles de bain</span>
                    <div className="flex items-center mt-1">
                      <Bath className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">{property.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Surface</span>
                    <div className="flex items-center mt-1">
                      <Ruler className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">{property.size}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Année</span>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 text-sm text-gray-500">
                Référence: {property.reference}
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  Contacter l'agent
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Prendre rendez-vous pour visiter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
