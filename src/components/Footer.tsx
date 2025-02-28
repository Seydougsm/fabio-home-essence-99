
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast({
        title: "Inscription réussie !",
        description: "Vous recevrez désormais nos actualités immobilières.",
      });
      e.target.reset();
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fabio Immobilier</h3>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour tous vos projets immobiliers au Togo depuis 2010. 
              Nous vous accompagnons dans l'achat, la vente et la location de biens immobiliers.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-primary transition-colors">
                  Propriétés
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/properties?status=vendre" className="text-gray-300 hover:text-primary transition-colors">
                  À vendre
                </Link>
              </li>
              <li>
                <Link to="/properties?status=louer" className="text-gray-300 hover:text-primary transition-colors">
                  À louer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-300">Boulevard du Mono, Quartier Administratif, Lomé, Togo</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+22890123456" className="text-gray-300 hover:text-primary transition-colors">
                  +228 90 12 34 56
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:info@fabioimmobilier.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@fabioimmobilier.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Restez informé</h3>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités immobilières.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <Input
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  className="rounded-r-none border-r-0"
                  required
                />
                <Button type="submit" className="rounded-l-none">
                  S'inscrire
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Fabio Immobilier. Tous droits réservés.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-primary transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
