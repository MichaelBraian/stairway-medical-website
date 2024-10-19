import React, { useState } from 'react';
import { Play } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const features = [
    { number: 1, title: 'Luer Lock', description: 'Secure connection for medical devices' },
    { number: 2, title: 'Finger grip', description: 'Ergonomic design for easy handling' },
    { number: 3, title: 'Oxygen and carbon dioxide outlet', description: 'Efficient gas exchange' },
  ];

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <section id="product" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">STAIRWAY Device</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <img
              src="/images/stairway-device-overview.webp"
              alt="STAIRWAY Device Overview"
              className="w-full rounded-lg shadow-lg"
            />
            <button
              onClick={openVideo}
              className="mt-4 flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Play size={20} className="mr-2" />
              Watch Instructional Video
            </button>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.number} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                      {feature.number}
                    </div>
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">STAIRWAY Instructional Video</h3>
              <button onClick={closeVideo} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <video controls className="w-full">
              <source src="/videos/STAIRWAY Instruktionsvideo - 2024 - med Ljud - V2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;