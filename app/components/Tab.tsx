// components/TabComponent.tsx
"use client"
import React, { useState } from 'react';

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mision' | 'vision'>('mision');

  const handleTabClick = (tab: 'mision' | 'vision') => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-2xl mx-auto py-16">
      {/* Tab Headers */}
      <div className="flex justify-center border-b border-gray-300 mb-8">
        <button
          onClick={() => handleTabClick('mision')}
          className={`flex-1 py-3 text-lg font-semibold text-center transition-colors duration-300 ${
            activeTab === 'mision' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-600'
          }`}
        >
          Misión
        </button>
        <button
          onClick={() => handleTabClick('vision')}
          className={`flex-1 py-3 text-lg font-semibold text-center transition-colors duration-300 ${
            activeTab === 'vision' ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-600'
          }`}
        >
          Visión
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg transition duration-300">
        {activeTab === 'mision' ? (
          <p className="text-gray-700 leading-relaxed">
            Mantener el compromiso y la responsabilidad de defender las actividades del Comercio Internacional de nuestros clientes grandes o pequeños proporcionando un servicio de calidad que cumpla con las expectativas de los empresarios que constituyen nuestra membresía al representarlo y ampararle sus derechos en la logística de sus importaciones y exportaciones cumpliendo con la legislación aduanera vigente, con personal idóneo a objeto de brindarles un servicio ágil, amable y honorable.
          </p>
        ) : (
          <p className="text-gray-700 leading-relaxed">
            El equipo humano de Asesorías en Negocios Internacionales “ANI SAS”, tiene el propósito de tener en el presente con proyección hacia el futuro la meta de consolidarnos como una institución de agenciamiento Aduanero de mayor prestigio y tradición en Colombia, manteniendo una participación importante en los acuerdos internacionales.
          </p>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
