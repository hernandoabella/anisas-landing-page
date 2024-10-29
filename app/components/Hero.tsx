// components/Hero.tsx
"use client"
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden text-white">
        
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">AGENCIA DE ADUANAS</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Experiencia en el área de comercio internacional, aduana y logística en las tramitaciones de importaciones y exportaciones.
        </p>
        <button className="mt-8 px-6 py-3 bg-teal-600 text-white rounded-md shadow-lg hover:bg-teal-700 transition duration-300">
          Contáctenos
        </button>
      </div>
    </section>
  );
};

export default Hero;
