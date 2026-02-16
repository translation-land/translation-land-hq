import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/qr/ERDSPOB6INRHP1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
      aria-label="چت در واتساپ"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
