// components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Company Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-teal-500">ANISAS</h3>
          <p>© {new Date().getFullYear()} Agencia de Aduanas Asesorías en Negocios Internacionales S.A.</p>
          <p>Todos los derechos reservados.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-teal-500 hover:text-teal-300 transition duration-300">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-teal-500 hover:text-teal-300 transition duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-teal-500 hover:text-teal-300 transition duration-300">
            <FaYoutube size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-teal-500 hover:text-teal-300 transition duration-300">
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;