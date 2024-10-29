// components/Contact.tsx
"use client"

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [showBranches, setShowBranches] = useState(false);

  const toggleBranches = () => setShowBranches(!showBranches);

  return (
    <section id="contact" className="py-16 px-6 lg:px-8 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">Contáctenos</h2>
        
        {/* Main Contact Information */}
        <div className="mb-12">
          <p className="text-lg">Carrera 53 No. 76-239 of.302</p>
          <p className="text-lg">Email: <a href="mailto:info@anisas.com.co" className="text-teal-600">info@anisas.com.co</a></p>
          <p className="text-lg">Tel: +57 3017258276</p>
          <p className="text-lg">Tel: 57 (5) 3587856 - 3582229</p>
        </div>

        {/* Sucursales Toggle Button */}
        <button
          onClick={toggleBranches}
          className="w-full py-3 px-4 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 transition duration-300 text-left"
        >
          {showBranches ? 'Sucursales' : 'Sucursales'}
        </button>

        {showBranches && (
          <div className="space-y-8 mt-6">
            <h3 className="text-2xl font-bold text-teal-600">Sucursales</h3>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">BOGOTÁ</h4>
              <p>Calle 25D BIS A # 99-24 Piso 3, Barrio Fontibón</p>
              <p>PBX: +57-418 1844 / +571-418 1879</p>
              <p>Email: <a href="mailto:gerenciabogota@anisas.co" className="text-teal-600">gerenciabogota@anisas.co</a></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">SANTA MARTA</h4>
              <p>Teléfono: 3184000938</p>
              <p>Email: <a href="mailto:gerenciasm@anisas.co" className="text-teal-600">gerenciasm@anisas.co</a></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">IPIALES</h4>
              <p>Email: <a href="mailto:gerenciaipi@anisas.co" className="text-teal-600">gerenciaipi@anisas.co</a></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">CARTAGENA</h4>
              <p>AV. CRISANTO LUQUE DG 22 # 38-53 Oficina 301</p>
              <p>Teléfonos: 6620809 – 6744977</p>
              <p>Email: <a href="mailto:gerenciacartagena@anisas.co" className="text-teal-600">gerenciacartagena@anisas.co</a></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">MAICAO</h4>
              <p>CALLE 11 No. 10-48 Of. 210 Centro Comercial La Casona</p>
              <p>Teléfono: 3168550249</p>
              <p>Email: <a href="mailto:gerenciamaicao@anisas.co" className="text-teal-600">gerenciamaicao@anisas.co</a></p>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-md rounded-lg mb-12">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                placeholder="Tu Nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                placeholder="Tu Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                id="message"
                className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                rows={4}
                placeholder="Tu Mensaje"
              ></textarea>
            </div>
            <button type="submit" className="w-full py-3 px-4 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 transition duration-300">
              Enviar Mensaje
            </button>
          </form>
        </div>

        

        
        
      </div>
    </section>
  );
};

export default Contact;
