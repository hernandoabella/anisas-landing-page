// components/CTA.tsx
"use client"
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4" // Replace with your video path
        autoPlay
        loop
        muted
      />

      {/* Overlay for dark effect on video */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">Discover Our Services</h2>
        <p className="text-lg mb-8">We are here to support you in every step of your journey.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="#services"
            className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 "
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-teal-500 font-semibold rounded-md hover:bg-gray-200 "
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
