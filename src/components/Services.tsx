
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="bg-white hover:shadow-md transition-all duration-300 border border-dental-pink/20">
      <CardHeader className="text-center">
        <div className="mx-auto bg-dental-lightpink p-4 rounded-full w-16 h-16 flex items-center justify-center text-pink-500 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-dental-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-dental-text">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Clareamento Dental",
      description: "Deixe seus dentes mais brancos e brilhantes com nosso tratamento especializado de clareamento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 2c.97 0 1.72.91 1.49 1.86C16.73 6.74 16 9.28 16 12c0 2.72.73 5.26 1.49 8.14.23.95-.52 1.86-1.49 1.86H8c-.97 0-1.72-.91-1.49-1.86C7.27 17.26 8 14.72 8 12c0-2.72-.73-5.26-1.49-8.14C6.28 2.91 7.03 2 8 2h8z" />
        </svg>
      ),
    },
    {
      title: "Tratamentos Ortodônticos",
      description: "Corrigimos o alinhamento dos dentes com técnicas modernas para um sorriso perfeito.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 2v11m0 3v6"/>
          <path d="M17 2v11m0 3v6"/>
          <path d="M7 13h10"/>
          <path d="M7 5h10"/>
          <path d="M7 9h10"/>
        </svg>
      ),
    },
    {
      title: "Implantes Dentários",
      description: "Recupere dentes perdidos com implantes de alta qualidade que parecem e funcionam como naturais.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5.5v13"/>
          <path d="M8 9v6"/>
          <path d="M16 9v6"/>
          <path d="M6 14c3.667 0 7.333-2 11-2 0 0 0 0 0 0v4c-3.667 0-7.333 2-11 2 0 0 0-4 0-4z"/>
        </svg>
      ),
    },
    {
      title: "Limpeza Profissional",
      description: "Elimine o tártaro e manchas com nossa limpeza profunda, deixando seus dentes totalmente limpos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h3a2 2 0 0 0 2-2V3"/>
          <path d="M21 7h-3a2 2 0 0 1-2-2V3"/>
          <path d="M3 17h3a2 2 0 0 1 2 2v2"/>
          <path d="M21 17h-3a2 2 0 0 0-2 2v2"/>
          <path d="m8 14 8-4"/>
          <path d="m8 10 8 4"/>
        </svg>
      ),
    },
    {
      title: "Restaurações Estéticas",
      description: "Restauramos dentes danificados com materiais que imitam perfeitamente a cor natural dos seus dentes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 8-8 8"/>
          <circle cx="12" cy="12" r="9"/>
        </svg>
      ),
    },
    {
      title: "Tratamento de Canal",
      description: "Realizamos procedimentos de canal com tecnologia avançada para eliminar a dor e salvar seu dente.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v1"/>
          <path d="M12 7v1"/>
          <path d="M12 13v1"/>
          <path d="M12 19v1"/>
          <path d="M18.4 4.6 17.7 5.3"/>
          <path d="M15 8 15.7 7.3"/>
          <path d="M8.3 14.7 9 14"/>
          <path d="M5.3 17.7 6 17"/>
          <path d="M19 12h-1"/>
          <path d="M13 12h-1"/>
          <path d="M7 12H6"/>
          <path d="M13 12h1"/>
          <path d="M19.4 19.4 18.7 18.7"/>
          <path d="M15 16l-.7.7"/>
          <path d="M8.3 9.3 9 10"/>
          <path d="M5.3 6.3 6 7"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-dental-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Serviços</h2>
          <p className="text-lg text-dental-text max-w-2xl mx-auto">
            Oferecemos uma variedade de tratamentos odontológicos para cuidar da sua saúde bucal completa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
