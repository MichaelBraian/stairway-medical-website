import React from 'react';
import { CheckCircle } from 'lucide-react';

const DeviceInfo = () => {
  return (
    <section id="device-info" className="py-12 md:py-20" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="/images/STAIRWAY-Studio.webp" alt="STAIRWAY Device" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 leading-tight">
              The first device for keeping the airways open during sedation
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              STAIRWAY is an innovative device that maintains the jaws in a stable position during sedation.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              It prevents more than 80% of respiratory arrests during light and moderate-to-deep sedation.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4">
              <li className="flex items-center">
                <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-base md:text-lg text-gray-700">Reduces healthcare costs related to sedation complications</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-base md:text-lg text-gray-700">Reduce stress for sedation staff</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-base md:text-lg text-gray-700">Increased patient safety</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceInfo;