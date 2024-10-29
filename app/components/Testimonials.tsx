// components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => {
  // Sample testimonials data
  const testimonials = [
    {
      feedback:
        "Excelente servicio y atención personalizada, siempre están disponibles para resolver nuestras dudas.",
      name: "Carlos Rodríguez",
      position: "Gerente General, Logística S.A.",
    },
    {
      feedback:
        "Gracias a su equipo, hemos optimizado nuestros procesos de importación y exportación.",
      name: "Laura Martínez",
      position: "Directora de Comercio Exterior, Global Trade Ltd.",
    },
    {
      feedback:
        "El equipo de Agencia de Aduanas siempre cumple con los tiempos de entrega y mantiene una comunicación constante.",
      name: "Juan Pérez",
      position: "CEO, Exportaciones Pérez",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600">LO QUE DICEN NUESTROS CLIENTES</h2>
          <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            Lo que dicen nuestros clientes sobre nosotros y nuestro servicio de
            primera calidad.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-600 italic mb-4">
              &quot;{testimonial.feedback}&quot;
              </p>
              <h3 className="text-lg font-semibold text-teal-600">
                {testimonial.name}
              </h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
