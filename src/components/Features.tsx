
import { Building, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Features = () => {
  const features = [
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Créer de l'expérience",
      description: "Séjours, excursion ou voyages ou lunes de miel cette semaine ou ce weekend? Commencer votre expérience dans nos appartements et villas meublés sélectionnés avec soin : moins chers et plus confortables.",
      button: "Explorer nos immeubles meublés",
      link: "/meubles"
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Lancer une entreprise",
      description: "Les entreprises se lancent ici. Vos bureaux, magasins et entrepôts, et Boutiques en location. Voulez-vous bailler plutôt pour une longue durée? Découvrir les endroits à forte valeur commerciale et choisir le bon emplacement de votre entreprise.",
      button: "Explorer nos immeubles d'entreprise",
      link: "/entreprise"
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Trouver un logement",
      description: "Logement ancien ou moderne ? Chambres salon, Villas, Appartements ou une chambre en location vous attendent. Changez d'air! Commencer votre déménagement avec nous et découvrir d'autres quartiers ou villes",
      button: "Trouver un logement",
      link: "/logements"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Link to={feature.link}>
                <Button variant="outline" className="mt-auto">
                  {feature.button}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
