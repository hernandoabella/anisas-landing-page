// components/Team.tsx
import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Carlos Hernández',
      role: 'Gerente de Operaciones',
      image: '/team1.jpg', // Replace with actual image paths
    },
    {
      name: 'María Rodríguez',
      role: 'Especialista en Comercio Internacional',
      image: '/team2.jpg',
    },
    {
      name: 'Luis García',
      role: 'Asesor de Logística',
      image: '/team3.jpg',
    },
  ];

  return (
    <section id="team" className="py-16 px-6 lg:px-8 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">Nuestro Equipo</h2>
        <p className="mb-12 text-lg leading-relaxed">
          Contamos con un equipo de trabajo idóneo, capaz de responder a las expectativas y necesidades actuales.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-teal-600">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
