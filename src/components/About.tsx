import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20" style={{ background: '#E7F1FA' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 leading-tight">
              Being sedated is not without risk
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Oxygen deprivation affects 50% of people sedated outside hospitals and 10-20% of people sedated in hospitals.
            </p>
            <p className="text-base md:text-lg text-gray-700">
              The reason is that the patient's airways collapse when the level of consciousness drops - the sedator must therefore always be prepared to intervene immediately.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 md:max-w-md">
            <img src="/images/Sleeping.webp" alt="Sedated Patient" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;