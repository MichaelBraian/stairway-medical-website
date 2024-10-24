import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/hero-background-2.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6 max-w-3xl">
          Revolutionizing device for simple and safe sedation
        </h1>
        <a
          href="#about"
          className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Discover STAIRWAY
        </a>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 w-full bg-blue-900 py-8 z-20">
        <div className="container mx-auto px-4 text-center grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
          <div>
            <h2 className="text-3xl font-bold">250M</h2>
            <p className="text-sm">Sedations performed globally each year</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">$2,300</h2>
            <p className="text-sm">Standard procedural sedation costs (in the US)</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">179%</h2>
            <p className="text-sm">Increase in costs due to sedation-related complications (in the US)</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">80%</h2>
            <p className="text-sm">Percentage of respiratory arrests avoided with STAIRWAY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;