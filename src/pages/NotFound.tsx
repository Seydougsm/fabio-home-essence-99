
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16 flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page non trouvée</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/">
            <Button size="lg">Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
