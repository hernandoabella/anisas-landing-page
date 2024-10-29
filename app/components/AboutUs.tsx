// components/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="mt-20 py-16 px-6 lg:px-8 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-teal-600 mb-8">Conócenos</h2>

        {/* Description */}
        <p className="mb-6 text-lg leading-relaxed">
          Somos una agencia de aduanas con más de 30 años de experiencia en la logística de comercio internacional.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Como Agente de Aduanas que desarrollamos una actividad mercantil y de servicios orientados a garantizarle al industrial el cumplimiento de todas las normas legales existentes, proporcionamos a ellos el asesoramiento personalizado para la logística en las tramitaciones de importaciones y exportaciones.
        </p>

        {/* Historia Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Historia</h3>
          <p className="text-lg leading-relaxed mb-6">
            Según Decreto 2532 del año 1994 el gobierno determinó la creación de las “Sociedades de Intermediación Aduanera S.I.A.” Fue entonces cuando comenzó la fusión de las Agencias de Aduanas y los comerciantes dedicados a esta actividad. Es así como nace Agencia de Aduanas Asesorías en Negocios Internacionales S.A. desde el 1 marzo de 1995, autorizada con Resolución No. 007621, Código de Asignación 0498 expedido por la Dirección de Impuestos y Aduanas Nacionales “DIAN” Nivel Central de Bogotá.
          </p>
        </div>

        {/* ¿Qué Nos Inspira? Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">¿Qué Nos Inspira?</h3>
          <p className="text-lg leading-relaxed mb-6">
            Ser aliado estratégico y de confianza, representando a importadores y exportadores en la aplicación de los distintos regímenes aduaneros.
          </p>
          <p className="text-lg leading-relaxed">
            Profesionales especializados en comercio internacional enfocados en prestar un servicio en la cadena logística en la entrega de las mercancías en el menor tiempo posible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
