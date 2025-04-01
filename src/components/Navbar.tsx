
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5571991017313', '_blank');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-dental-text">SÓ-<span className="text-pink-500">RIA</span></h1>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#inicio" className="text-dental-text hover:text-pink-500 transition-colors">Início</a>
          <a href="#servicos" className="text-dental-text hover:text-pink-500 transition-colors">Serviços</a>
          <a href="#sobre" className="text-dental-text hover:text-pink-500 transition-colors">Sobre</a>
          <a href="#contato" className="text-dental-text hover:text-pink-500 transition-colors">Contato</a>
        </div>
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-pink-500 hover:bg-pink-600 text-white hidden md:flex items-center gap-2"
        >
          <Phone size={18} />
          Agendar Consulta
        </Button>
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-pink-500 hover:bg-pink-600 text-white md:hidden rounded-full p-2"
        >
          <Phone size={18} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
