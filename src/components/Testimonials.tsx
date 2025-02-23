
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Kossi Adebayor",
      country: "Togo",
      text: "J'ai trouvé l'appartement parfait grâce à Fabio Immobilier. Le service est professionnel et l'équipe très réactive.",
      rating: 5
    },
    {
      name: "Afiavi Koudawo",
      country: "Togo",
      text: "Une agence immobilière de confiance. Les biens sont bien entretenus et les prix sont raisonnables.",
      rating: 5
    },
    {
      name: "Pascal Amoussou",
      country: "Bénin",
      text: "Excellente expérience avec Fabio Immobilier. La qualité des biens proposés est remarquable.",
      rating: 4
    },
    {
      name: "Fatima Ouédraogo",
      country: "Burkina Faso",
      text: "Service client exceptionnel. Ils m'ont aidé à trouver exactement ce que je cherchais.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="default" size="lg" className="gap-2">
            <MessageSquare className="h-5 w-5" />
            Laisser un avis
          </Button>
        </div>
      </div>
    </section>
  );
};
