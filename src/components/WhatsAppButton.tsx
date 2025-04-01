
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5571991017313', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      aria-label="Contato pelo WhatsApp"
    >
      <MessageSquare size={28} />
    </button>
  );
};

export default WhatsAppButton;
