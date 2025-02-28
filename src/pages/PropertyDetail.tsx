
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Home, DollarSign, Bath, BedDouble, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Mock data - in a real application this would come from an API
const propertiesData = [
  {
    id: 1,
    title: "Villa Moderne à Djidjolé",
    price: "150 000 000 FCFA",
    location: "Djidjolé, Lomé",
    type: "Villa",
    status: "vendre",
    reference: "08-23-DJL4R",
    bedrooms: 4,
    bathrooms: 3,
    size: "350 m²",
    land: "800 m²",
    description: "Magnifique villa moderne située dans le quartier prisé de Djidjolé. Cette propriété dispose de 4 chambres spacieuses, 3 salles de bains, un salon lumineux, une cuisine équipée, une terrasse et un jardin aménagé. La villa est construite avec des matériaux de haute qualité et offre un confort exceptionnel.",
    features: ["Piscine", "Jardin aménagé", "Garage pour 2 voitures", "Système d'alarme", "Climatisation", "Groupe électrogène"],
    imageUrl: "/lovable-uploads/4e18e10b-39b8-4019-a900-a7e5492fa40d.png",
    additionalImages: [
      "/lovable-uploads/cd999047-db98-4386-a55b-8028ba11fec3.png",
      "/lovable-uploads/3cd69875-e62a-406b-8d63-32b43b0d4c14.png",
      "/lovable-uploads/8e3a2ad2-8d16-4d9c-81c0-1a9550ecc66d.png",
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
    bedrooms: 3,
    bathrooms: 2,
    size: "180 m²",
    land: "N/A",
    description: "Superbe appartement de luxe situé au 3ème étage d'une résidence sécurisée sur l'Avenue de Pya. Il comprend 3 chambres, 2 salles de bains, un grand salon avec balcon, une cuisine moderne équipée et une buanderie. L'appartement bénéficie d'une finition haut de gamme et d'une vue imprenable sur la ville.",
    features: ["Ascenseur", "Parking sécurisé", "Gardiennage 24/7", "Climatisation", "Cuisine équipée", "Balcon"],
    imageUrl: "/lovable-uploads/cd999047-db98-4386-a55b-8028ba11fec3.png",
    additionalImages: [
      "/lovable-uploads/3cd69875-e62a-406b-8d63-32b43b0d4c14.png",
      "/lovable-uploads/e269cc66-ac03-4635-ab20-594cd33eed3b.png",
      "/lovable-uploads/b98932f2-395c-40a2-8cc2-6658bc67640c.png",
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
    bedrooms: 3,
    bathrooms: 2,
    size: "220 m²",
    land: "600 m²",
    description: "Belle maison de vacances située à Baguida, à proximité de la plage. Cette propriété dispose de 3 chambres, 2 salles de bains, un grand salon, une cuisine équipée et une terrasse avec vue sur le jardin. La maison est vendue meublée et équipée, prête à vivre.",
    features: ["Piscine", "Jardin tropical", "Terrasse", "Climatisation", "Meubles inclus", "Sécurité 24/7"],
    imageUrl: "/lovable-uploads/9b1b13eb-339b-4192-a909-fa3e075ad78f.png",
    additionalImages: [
      "/lovable-uploads/447ab3a7-5cc2-48b9-859c-4f8744bed1dc.png",
      "/lovable-uploads/4e18e10b-39b8-4019-a900-a7e5492fa40d.png",
      "/lovable-uploads/8e3a2ad2-8d16-4d9c-81c0-1a9550ecc66d.png",
    ]
  },
  {
    id: 4,
    title: "Terrain Commercial",
    price: "200 000 000 FCFA",
    location: "Zone Portuaire, Lomé",
    type: "Terrain",
    status: "indisponible",
    reference: "08-23-PRT1X",
    bedrooms: 0,
    bathrooms: 0,
    size: "N/A",
    land: "2000 m²",
    description: "Terrain commercial exceptionnel situé dans la Zone Portuaire de Lomé. Ce terrain de 2000 m² offre un emplacement stratégique pour tout projet commercial ou industriel. Il dispose de tous les documents légaux et est prêt pour la construction. Une opportunité unique pour les investisseurs.",
    features: ["Emplacement stratégique", "Tous documents en règle", "Accès facile", "Proche des axes principaux", "Viabilisé"],
    imageUrl: "/lovable-uploads/dcbb6f6e-496c-4294-a6bb-a9843ce2b2cd.png",
    additionalImages: [
      "/lovable-uploads/b98932f2-395c-40a2-8cc2-6658bc67640c.png",
      "/lovable-uploads/e269cc66-ac03-4635-ab20-594cd33eed3b.png",
      "/lovable-uploads/1b238cdd-377c-4ce7-bbb0-a04d02a3ee45.png",
    ]
  },
  {
    id: 5,
    title: "Résidence Familiale",
    price: "95 000 000 FCFA",
    location: "Agbalépédo, Lomé",
    type: "Maison",
    status: "louer",
    reference: "10-23-AGL2M",
    bedrooms: 4,
    bathrooms: 3,
    size: "280 m²",
    land: "500 m²",
    description: "Spacieuse résidence familiale située dans le quartier calme d'Agbalépédo. Cette maison dispose de 4 chambres, 3 salles de bains, un grand salon/salle à manger, une cuisine moderne, un bureau et un jardin bien entretenu. Idéale pour une famille à la recherche de confort et de tranquillité.",
    features: ["Jardin paysager", "Garage pour 2 voitures", "Cuisine équipée", "Climatisation", "Quartier résidentiel", "Sécurité"],
    imageUrl: "/lovable-uploads/1b238cdd-377c-4ce7-bbb0-a04d02a3ee45.png",
    additionalImages: [
      "/lovable-uploads/9b1b13eb-339b-4192-a909-fa3e075ad78f.png",
      "/lovable-uploads/cd999047-db98-4386-a55b-8028ba11fec3.png",
      "/lovable-uploads/4e18e10b-39b8-4019-a900-a7e5492fa40d.png",
    ]
  },
  {
    id: 6,
    title: "Villa Préstige avec Piscine",
    price: "250 000 000 FCFA",
    location: "Aného, Togo",
    type: "Villa",
    status: "vendre",
    reference: "11-23-ANH5P",
    bedrooms: 5,
    bathrooms: 4,
    size: "450 m²",
    land: "1200 m²",
    description: "Magnifique villa de prestige située à Aného, à 45 minutes de Lomé. Cette propriété d'exception offre 5 chambres spacieuses avec salles de bains privatives, un vaste salon/salle à manger, une cuisine ultramoderne, une salle de sport, un home cinéma et une superbe piscine. La villa est construite avec des matériaux haut de gamme et dispose d'une vue imprenable sur la mer.",
    features: ["Grande piscine à débordement", "Vue sur mer", "Domotique", "Cuisine ultramoderne", "Salle de sport", "Home cinéma", "Système d'alarme avancé", "Panneaux solaires"],
    imageUrl: "/lovable-uploads/447ab3a7-5cc2-48b9-859c-4f8744bed1dc.png",
    additionalImages: [
      "/lovable-uploads/8e3a2ad2-8d16-4d9c-81c0-1a9550ecc66d.png",
      "/lovable-uploads/e269cc66-ac03-4635-ab20-594cd33eed3b.png",
      "/lovable-uploads/9b1b13eb-339b-4192-a909-fa3e075ad78f.png",
    ]
  },
];

const PropertyDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("mobile");
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
    mobileNumber: ""
  });

  // Find the property by ID
  const property = propertiesData.find(p => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Propriété non trouvée</h1>
          <p className="mb-8">La propriété que vous recherchez n'existe pas.</p>
          <Link to="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = () => {
    if (bookingStep === 1) {
      setBookingStep(2);
    } else {
      toast({
        title: "Réservation confirmée",
        description: paymentMethod === "mobile" 
          ? "Vous allez recevoir un SMS pour confirmer votre paiement Mobile Money." 
          : "Votre rendez-vous a été confirmé. Vous paierez en espèces sur place.",
      });
      setBookingStep(1);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "vendre":
        return <Badge className="bg-green-600 hover:bg-green-700 text-white px-3 py-1">À VENDRE</Badge>;
      case "louer":
        return <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1">À LOUER</Badge>;
      case "indisponible":
        return <Badge className="bg-red-600 hover:bg-red-700 text-white px-3 py-1">NON DISPONIBLE</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Property Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <div className="absolute top-2 left-2 z-10">
                {getStatusBadge(property.status)}
              </div>
              <img 
                src={selectedImage === 0 ? property.imageUrl : property.additionalImages[selectedImage - 1]} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              <div 
                className={`h-20 w-20 flex-shrink-0 rounded cursor-pointer border-2 ${selectedImage === 0 ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setSelectedImage(0)}
              >
                <img 
                  src={property.imageUrl} 
                  alt={`${property.title} thumbnail`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              {property.additionalImages.map((img, index) => (
                <div 
                  key={index}
                  className={`h-20 w-20 flex-shrink-0 rounded cursor-pointer border-2 ${selectedImage === index + 1 ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(index + 1)}
                >
                  <img 
                    src={img} 
                    alt={`${property.title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-3xl font-bold">{property.title}</h1>
            </div>
            <p className="text-primary text-2xl font-bold mb-4">{property.price}</p>
            <div className="flex items-center mb-3">
              <MapPin className="h-5 w-5 text-gray-500 mr-1" />
              <span className="text-gray-600">{property.location}</span>
            </div>
            <div className="flex items-center mb-6">
              <span className="text-sm text-gray-500">Référence: {property.reference}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center p-3 bg-secondary rounded-lg">
                <Home className="h-6 w-6 text-primary mb-1" />
                <span className="text-sm text-gray-600">Type</span>
                <span className="font-medium">{property.type}</span>
              </div>
              {property.bedrooms > 0 && (
                <div className="flex flex-col items-center p-3 bg-secondary rounded-lg">
                  <BedDouble className="h-6 w-6 text-primary mb-1" />
                  <span className="text-sm text-gray-600">Chambres</span>
                  <span className="font-medium">{property.bedrooms}</span>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="flex flex-col items-center p-3 bg-secondary rounded-lg">
                  <Bath className="h-6 w-6 text-primary mb-1" />
                  <span className="text-sm text-gray-600">Salles de bain</span>
                  <span className="font-medium">{property.bathrooms}</span>
                </div>
              )}
              <div className="flex flex-col items-center p-3 bg-secondary rounded-lg">
                <DollarSign className="h-6 w-6 text-primary mb-1" />
                <span className="text-sm text-gray-600">Surface</span>
                <span className="font-medium">{property.land}</span>
              </div>
            </div>

            {property.status !== "indisponible" && (
              <>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mb-4" size="lg">
                      <Calendar className="mr-2 h-5 w-5" />
                      Prendre rendez-vous pour visiter
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>{bookingStep === 1 ? "Prendre un rendez-vous" : "Choisir votre méthode de paiement"}</DialogTitle>
                    </DialogHeader>
                    {bookingStep === 1 ? (
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Nom
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="phone" className="text-right">
                            Téléphone
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="date" className="text-right">
                            Date
                          </Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="message" className="text-right">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="col-span-3"
                            rows={3}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="py-4 space-y-6">
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                          <div className="flex items-start space-x-2 mb-4">
                            <RadioGroupItem value="mobile" id="mobile" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="mobile" className="font-medium">
                                Payer par Mobile Money
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Paiement sécurisé via Mobile Money (Flooz, T-Money, etc.)
                              </p>
                              
                              {paymentMethod === "mobile" && (
                                <div className="mt-2">
                                  <Label htmlFor="mobileNumber">Numéro Mobile Money</Label>
                                  <Input
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                    placeholder="Ex: 91234567"
                                    required
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="cash" id="cash" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="cash" className="font-medium">
                                Payer en espèces sur place
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Vous paierez la visite directement sur place
                              </p>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    )}
                    <div className="flex justify-end">
                      {bookingStep === 2 && (
                        <Button variant="outline" className="mr-2" onClick={() => setBookingStep(1)}>
                          Retour
                        </Button>
                      )}
                      <Button onClick={handleBookingSubmit}>
                        {bookingStep === 1 ? "Continuer" : "Confirmer la réservation"}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            )}

            <Link to="/contact">
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-5 w-5" />
                Contacter l'agent immobilier
              </Button>
            </Link>
          </div>
        </div>

        {/* Property Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-700 mb-8 whitespace-pre-line">{property.description}</p>

          <h2 className="text-2xl font-bold mb-4">Caractéristiques</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
            {property.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Similar properties section */}
          <h2 className="text-2xl font-bold mb-6">Biens similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {propertiesData
              .filter(p => p.id !== property.id && p.type === property.type)
              .slice(0, 3)
              .map(similarProperty => (
                <Card key={similarProperty.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="absolute top-2 left-2">
                      {getStatusBadge(similarProperty.status)}
                    </div>
                    <img
                      src={similarProperty.imageUrl}
                      alt={similarProperty.title}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold">{similarProperty.title}</h3>
                    <p className="text-primary font-bold">{similarProperty.price}</p>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{similarProperty.location}</span>
                    </div>
                    <Link to={`/properties/${similarProperty.id}`}>
                      <Button variant="outline" className="w-full mt-2" size="sm">
                        Voir les détails
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
