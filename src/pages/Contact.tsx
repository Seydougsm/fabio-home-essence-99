
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message envoyé!",
      description: "Nous vous contacterons bientôt.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleAppointmentRequest = () => {
    toast({
      title: "Demande de rendez-vous",
      description: "Nous vous contacterons rapidement pour fixer un rendez-vous.",
    });
  };

  // Numéros de téléphone avec formatage pour les liens
  const phoneNumbers = [
    { display: "+228 90 12 34 56", raw: "+22890123456" },
    { display: "+228 99 87 65 43", raw: "+22899876543" }
  ];

  // Adresse avec coordonnées pour Google Maps
  const address = {
    display: "Boulevard du Mono, Quartier Administratif, Lomé, Togo",
    coords: "6.173738,1.168572" // Latitude,Longitude de Lomé
  };

  // Adresses email
  const emails = [
    "info@fabioimmobilier.com",
    "contact@fabioimmobilier.com"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre équipe d'experts immobiliers est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-secondary p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    {phoneNumbers.map((phone, index) => (
                      <p key={index} className="text-gray-600">
                        <a 
                          href={`tel:${phone.raw}`} 
                          className="hover:text-primary transition-colors"
                        >
                          {phone.display}
                        </a>
                        {" "}
                        <a
                          href={`https://wa.me/${phone.raw.replace('+', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 transition-colors"
                        >
                          (WhatsApp)
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    {emails.map((email, index) => (
                      <p key={index} className="text-gray-600">
                        <a 
                          href={`mailto:${email}`} 
                          className="hover:text-primary transition-colors"
                        >
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-gray-600">
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${address.coords}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {address.display}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Horaires d'ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 8h00 - 18h00
                      <br />
                      Samedi: 9h00 - 13h00
                      <br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Vous êtes agent immobilier ?</h3>
              <p className="mb-4">
                Rejoignez notre équipe dynamique et développez votre réseau professionnel dans un environnement stimulant.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Postulez maintenant
              </Button>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Besoin d'un rendez-vous ?</h3>
              <p className="mb-4">
                Notre équipe se tient à votre disposition pour vous rencontrer et discuter de vos projets immobiliers.
              </p>
              <Button 
                onClick={handleAppointmentRequest}
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-blue-600 w-full"
              >
                Demander un rendez-vous
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Sujet de votre message"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre message..."
                  rows={6}
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
        
        {/* Google Map */}
        <div className="mt-16 rounded-lg overflow-hidden h-96 shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63520.88443348112!2d1.168572!3d6.173738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x3224b5422caf411d!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2sus!4v1683022830976!5m2!1sfr!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Carte de localisation"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
