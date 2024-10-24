import React from 'react';

const Sedator = () => {
  return (
    <section className="py-20" style={{ background: '#E7F1FA' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 md:max-w-md">
          <img
            src="/images/sedator-image.webp"
            alt="Sedator"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            A Sedator’s problem. A dentist’s solution.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            “The consequences can be severe if you are not paying attention”
          </p>
          <p className="text-lg text-gray-700 mb-4">
            STAIRWAY co-founder and medical expert Jonas Åkeson knew first hand how you need to be constantly ready to intervene during a sedation.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            He explained the problem to his friend and dental expert Thomas List.
          </p>
          <p className="text-lg text-gray-700">
            In this intersection of dental and sedation expertise, STAIRWAY was invented.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sedator;

