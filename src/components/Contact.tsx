
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5571991017313', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-lg text-dental-text max-w-2xl mx-auto">
            Estamos prontos para atender você e cuidar do seu sorriso. Agende sua consulta!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-dental-lightpink p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-pink-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p>(71) 99101-7313</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="text-pink-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p>(71) 99101-7313</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-pink-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Endereço</h4>
                  <p>Ecovilla Barra do Jacuípe, Camaçari - BA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-pink-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábados: 8h às 12h</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-pink-500 hover:bg-pink-600 text-white w-full py-6 text-lg"
              >
                <MessageSquare className="mr-2" />
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-center items-center">
              <img 
                src="/placeholder.svg" 
                alt="Atendimento Clínica SÓ-RIA" 
                className="w-2/3 h-auto mb-8 rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-semibold mb-4 text-center">Atendimento Humanizado</h3>
              <p className="text-center text-dental-text mb-8">
                Na Clínica SÓ-RIA, cada paciente é único. Trabalhamos para oferecer um atendimento 
                personalizado e cuidadoso, entendendo suas necessidades específicas.
              </p>
              <div className="text-center">
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  Conheça Nossa Clínica
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
