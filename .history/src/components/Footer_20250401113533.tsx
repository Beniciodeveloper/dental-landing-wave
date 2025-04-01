
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dental-text text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">SÓ-<span className="text-pink-300">RIA</span></h2>
            <p className="mt-2 text-sm text-gray-300">
              Clínica Odontológica | Ecovilla Barra do Jacuípe, Camaçari - BA
            </p>
          </div>
          <div className="text-center md:text-right text-sm text-gray-300">
            <p>© {currentYear} Clínica Odontológica SÓ-RIA. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido por Lucas Benicio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
