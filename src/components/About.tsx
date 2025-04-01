
import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg"
                alt="Clínica SÓ-RIA" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dental-pink rounded-full hidden md:block"></div>
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Clínica SÓ-RIA</h2>
            <p className="text-lg mb-6 text-dental-text">
              Localizada na tranquila Ecovilla Barra do Jacuípe em Camaçari, a Clínica 
              Odontológica SÓ-RIA é um espaço dedicado à saúde e beleza do seu sorriso.
            </p>
            <p className="text-lg mb-6 text-dental-text">
              Nossa equipe é formada por profissionais experientes e apaixonados pela 
              odontologia, que trabalham com as técnicas mais modernas e equipamentos 
              de última geração para proporcionar tratamentos eficazes e confortáveis.
            </p>
            <p className="text-lg text-dental-text">
              Nosso compromisso é oferecer um atendimento humanizado, entendendo as 
              necessidades individuais de cada paciente e criando um ambiente acolhedor 
              onde todos se sintam seguros e bem cuidados.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="bg-dental-lightpink p-4 rounded-lg flex-1">
                <h3 className="font-semibold text-xl mb-2">Nossa Missão</h3>
                <p>Promover saúde bucal com excelência e humanização.</p>
              </div>
              <div className="bg-dental-lightpink p-4 rounded-lg flex-1">
                <h3 className="font-semibold text-xl mb-2">Nossos Valores</h3>
                <p>Ética, respeito, qualidade e inovação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
