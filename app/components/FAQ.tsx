// components/FAQ.tsx

"use client"
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  // Sample FAQ data
  const faqData: FAQItem[] = [
    {
      question: "¿Cuáles son los beneficios de utilizar sus servicios?",
      answer: "Ofrecemos asesoramiento personalizado y cumplimiento eficiente de todas las normativas aduaneras para garantizar un proceso ágil y seguro en sus operaciones de importación y exportación."
    },
    {
      question: "¿Qué documentos necesito para realizar una importación?",
      answer: "Los documentos básicos son: la factura comercial, la lista de empaque, el conocimiento de embarque y el certificado de origen. Dependiendo del tipo de mercancía, puede que se requieran otros documentos adicionales."
    },
    {
      question: "¿Cómo optimizan los tiempos de entrega?",
      answer: "Contamos con un equipo especializado en logística internacional, el cual se encarga de supervisar cada paso del proceso para asegurar tiempos de entrega mínimos."
    },
    {
      question: "¿Pueden gestionar exportaciones a cualquier país?",
      answer: "Sí, tenemos experiencia en gestionar exportaciones a diversos mercados internacionales y adaptamos nuestro servicio a los requisitos específicos de cada destino."
    }
  ];

  // Track open FAQ items
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle function to open/close an FAQ item
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600">PREGUNTAS FRECUENTES</h2>
          <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-teal-600">{faq.question}</h3>
                <span className="text-teal-500 text-2xl">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-4 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
