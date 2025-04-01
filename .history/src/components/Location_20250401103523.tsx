
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
              src="https://www.google.com.br/maps/place/ECOVILLA+BARRA+DO+JACUIPE/@-12.7011125,-38.1337401,16z/data=!4m14!1m7!3m6!1s0x7164fe8528e3667:0xde3067a9d9e371e4!2sECOVILLA+BARRA+DO+JACUIPE!8m2!3d-12.7014243!4d-38.1317899!16s%2Fg%2F11b6hndf9l!3m5!1s0x7164fe8528e3667:0xde3067a9d9e371e4!8m2!3d-12.7014243!4d-38.1317899!16s%2Fg%2F11b6hndf9l?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D" 
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
