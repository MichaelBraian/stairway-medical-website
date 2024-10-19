import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/hero-background.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        A unique device for smooth, simple and secure sedation
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          250 million procedural sedations are carried out worldwide each year
        </p>
        <a
          href="#about"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Discover STAIRWAY
        </a>
      </div>
    </section>
  );
};

export default Hero;
