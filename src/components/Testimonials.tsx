
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Testimonials = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  
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

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const country = formData.get("country");
    const rating = formData.get("rating");
    const review = formData.get("review");
    
    // Ici, vous pourriez ajouter le code pour envoyer les données à un serveur
    
    toast({
      title: "Avis envoyé",
      description: "Merci pour votre avis ! Il sera publié après modération.",
    });
    
    setIsDialogOpen(false);
    e.target.reset();
  };

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
          <Button variant="default" size="lg" className="gap-2" onClick={() => setIsDialogOpen(true)}>
            <MessageSquare className="h-5 w-5" />
            Laisser un avis
          </Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Partagez votre expérience</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" name="name" required placeholder="Votre nom" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="country">Pays</Label>
              <Input id="country" name="country" required placeholder="Votre pays" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rating">Note (1-5)</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num} className="flex items-center space-x-1 cursor-pointer">
                    <input 
                      type="radio" 
                      name="rating" 
                      value={num} 
                      className="sr-only" 
                      defaultChecked={num === 5}
                    />
                    <span 
                      className="text-2xl select-none peer-checked:text-yellow-400"
                      onClick={(e) => {
                        const radioInput = e.currentTarget.previousSibling;
                        radioInput.checked = true;
                      }}
                    >
                      {num <= 5 ? "★" : "☆"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="review">Votre avis</Label>
              <Textarea 
                id="review" 
                name="review" 
                required 
                placeholder="Partagez votre expérience avec nous..." 
                rows={4}
              />
            </div>
            
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Annuler</Button>
              </DialogClose>
              <Button type="submit">Envoyer</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
