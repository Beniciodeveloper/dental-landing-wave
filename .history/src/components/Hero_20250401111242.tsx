
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5571991017313', '_blank');
  };

  return (
    <section id="inicio" className="bg-gradient-to-b from-dental-lightpink to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Seu sorriso mais <span className="text-pink-500">bonito</span> e <span className="text-pink-500">saudável</span>
            </h1>
            <p className="text-lg mb-8 text-dental-text max-w-lg">
              Na Clínica Odontológica SÓ-RIA, cuidamos do seu sorriso com carinho e profissionalismo. Conheça nossos tratamentos.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-full"
            >
              <Calendar className="mr-2" size={24} />
              Agendar minha consulta
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-full bg-dental-pink p-4 shadow-lg animate-float">
              <img 
                src="../../public/img"
                alt="Sorriso saudável" 
                className="rounded-full"
                width={500} 
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
