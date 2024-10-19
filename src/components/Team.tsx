import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Jonas Åkeson, MD, PhD',
      role: 'Medical Expert',
      image: '/images/jonas-akeson.webp',
      bio: 'Professor and senior consultant in anaesthesiology and intensive care medicine at Lund University and Skåne University Hospital in Malmö, Sweden.',
    },
    {
      name: 'Thomas List, DDS, Odont.Dr/PhD',
      role: 'Dental Expert',
      image: '/images/thomas-list.webp',
      bio: 'Professor and senior consultant, head of the orofacial pain unit at the Department of Orofacial Pain and Jaw Function, Faculty of Odontology at Malmö University, Sweden.',
    },
    {
      name: 'Michael Braian, DDS, CDT, PhD',
      role: 'Dental Expert',
      image: '/images/michael-braian.webp',
      bio: 'Specialist in prosthetic dentistry with a focus on digital solutions in dentistry. Runs a private practice as both a dentist and dental technician.',
    },
    {
      name: 'Magnus Ljungvall, MD',
      role: 'Medical Expert',
      image: '/images/magnus-ljungvall.webp',
      bio: 'Specialist in anesthesia, intensive care, and emergency medicine. Works with clinical studies and as the company\'s web programmer.',
    },
    {
      name: 'Göran Brorsson, MBA',
      role: 'Chairman of the Board',
      image: '/images/goran-brorsson.webp',
      bio: 'Advisor with extensive managerial experience in medium-sized and large companies across the Nordics, Europe, USA, and Asia.',
    },
    {
      name: 'Christine Widstrand, PhD',
      role: 'Board Member',
      image: '/images/christine-widstrand.webp',
      bio: 'CEO of LU Holding AB with over 15 years of experience in research and development and more than 20 years in start-up companies.',
    },
    {
      name: 'Simon Jegou, PhD',
      role: 'Board Member',
      image: '/images/simon-jegou.webp',
      bio: 'Chief Strategy Officer at Magle Group with over 17 years of international experience in the Life Science industry.',
    },
    {
      name: 'Shervin Mizani',
      role: 'Board Member',
      image: '/images/shervin-mizani.webp',
      bio: 'Experienced professional in the medical device industry.',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedMember(member)}
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold">{selectedMember.name}</h3>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{selectedMember.role}</p>
            <div className="flex justify-center mb-4">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full max-w-md h-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-700">{selectedMember.bio}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;