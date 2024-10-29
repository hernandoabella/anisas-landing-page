import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-teal-600">ANISAS</div>

        {/* Navigation Links */}
        <nav className="space-x-8 hidden md:flex">
          <a
            href="#about"
            className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
          >
            Sobre Nosotros
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
          >
            Nuestros Servicios
          </a>
          <a
            href="#team"
            className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
          >
            Nuestro Equipo
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
