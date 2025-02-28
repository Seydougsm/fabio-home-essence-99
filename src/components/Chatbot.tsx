
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Bonjour ! Je suis votre assistant immobilier virtuel. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  // Questions et réponses prédéfinies
  const qaPairs = [
    {
      keywords: ["prix", "coûte", "tarif"],
      response: "Nos prix varient selon le type de bien et sa localisation. Vous pouvez consulter nos propriétés sur notre site pour avoir une idée des tarifs. Pour plus de détails, n'hésitez pas à nous contacter directement."
    },
    {
      keywords: ["visite", "visiter", "rendez-vous"],
      response: "Vous pouvez prendre rendez-vous pour visiter une propriété en cliquant sur le bouton 'Prendre rendez-vous pour visiter' sur la page de détail du bien qui vous intéresse."
    },
    {
      keywords: ["quartier", "zone", "localisation", "où"],
      response: "Nous proposons des biens immobiliers dans les meilleurs quartiers de Lomé et ses environs, notamment à Djidjolé, Aného, Baguida, Agbalépédo, Tokoin, et dans le centre-ville."
    },
    {
      keywords: ["contact", "joindre", "appeler", "téléphone"],
      response: "Vous pouvez nous contacter par téléphone au +228 90 12 34 56 ou au +228 99 87 65 43, par email à info@fabioimmobilier.com ou en vous rendant à notre bureau situé Boulevard du Mono, Quartier Administratif à Lomé."
    },
    {
      keywords: ["crédit", "prêt", "financement", "banque"],
      response: "Nous travaillons avec plusieurs banques partenaires pour faciliter le financement de votre acquisition. Nous pouvons vous mettre en relation avec les conseillers financiers de nos partenaires pour étudier votre projet."
    }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simuler un délai de réponse
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { role: "bot", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (userInput) => {
    // Vérifier les mots-clés dans la question
    for (const qa of qaPairs) {
      if (qa.keywords.some(keyword => userInput.toLowerCase().includes(keyword))) {
        return qa.response;
      }
    }

    // Réponse par défaut si aucun mot-clé correspondant
    return "Merci pour votre message. Pour obtenir des informations plus précises, n'hésitez pas à nous contacter directement par téléphone au +228 90 12 34 56 ou par email à info@fabioimmobilier.com.";
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      toast({
        title: "Assistant virtuel",
        description: "Notre assistant est prêt à répondre à vos questions.",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg flex flex-col w-80 sm:w-96 h-96 border border-gray-200 overflow-hidden">
          {/* Chat header */}
          <div className="bg-primary text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Assistant Immobilier</span>
            </div>
            <button onClick={toggleChat} className="text-white hover:bg-primary-dark rounded p-1">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user" 
                      ? "bg-primary text-white rounded-tr-none" 
                      : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg rounded-tl-none max-w-[80%] p-3">
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex items-end gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tapez votre message..."
              className="resize-none min-h-[60px]"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
            />
            <Button type="submit" size="icon" disabled={isTyping || !input.trim()}>
              {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="rounded-full h-14 w-14 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};
