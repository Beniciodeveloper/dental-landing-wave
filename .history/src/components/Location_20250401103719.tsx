import React from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-20 bg-dental-lightpink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Localização</h2>
          <p className="text-lg text-dental-text max-w-2xl mx-auto flex items-center justify-center">
            <MapPin className="inline-block mr-2 text-pink-500" size={24} />
            Ecovilla Barra do Jacuípe, Camaçari - BA
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-[400px] rounded-lg"
              src="https://www.google.com.br/maps/embed?pb=!1m14!1m8!1m3!1d15581.354529928708!2d-38.1337401!3d-12.7011125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7164fe8528e3667%3A0xde3067a9d9e371e4!2sECOVILLA%20BARRA%20DO%20JACUIPE!5e0!3m2!1spt-BR!2sbr!4v1716489432456!5m2!1spt-BR!2sbr" 
              allowFullScreen
              title="Localização Clínica SÓ-RIA"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;