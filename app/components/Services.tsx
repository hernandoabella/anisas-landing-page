// components/Services.tsx
import React from "react";
import {
  FaShippingFast,
  FaFileContract,
  FaTruck,
  FaBoxOpen,
  FaUserCheck,
} from "react-icons/fa";

const Services: React.FC = () => {
  // Example services with icons
  const services = [
    {
      title: "Asesoramiento en Importación",
      description: "Asesoría completa para el proceso de importación.",
      icon: <FaShippingFast />,
    },
    {
      title: "Gestión de Exportaciones",
      description: "Facilitamos el envío de productos al extranjero.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Trámites Aduaneros",
      description: "Cumplimiento de todos los trámites y normas de aduana.",
      icon: <FaFileContract />,
    },
    {
      title: "Documentación Legal",
      description: "Gestión de documentos para asegurar el cumplimiento legal.",
      icon: <FaFileContract />,
    },
    {
      title: "Optimización Logística",
      description: "Soluciones logísticas para mejorar tiempos y costos.",
      icon: <FaTruck />,
    },
    {
      title: "Atención Personalizada",
      description: "Soporte dedicado para cada cliente.",
      icon: <FaUserCheck />,
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600">
            NUESTRO SERVICIOS
          </h2>
          <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            Contamos con un equipo de trabajo idóneo, capaz de responder a las
            expectativas y necesidades actuales, teniendo en cuenta como
            prioridad la eficiencia en el cumplimiento de las operaciones para
            entregarles a ustedes una atención de constante información en cada
            embarque.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-teal-600 text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
