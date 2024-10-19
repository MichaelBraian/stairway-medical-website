import React, { useState } from 'react';
import { CheckCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const benefits = [
    'Maintains upper airway patency during sedation',
    {
      text: 'Prevents more than 80% of respiratory arrests',
      info: 'During the standardized initiation of light sedation and moderate-to-deep sedation in healthy volunteers.'
    },
    'Enables smooth, simple, and secure sedation',
    'Reduces healthcare costs related to sedation complications',
    'Personalized medical device',
    'Maintains the jaws in a stable position',
    'Clear access to oral cavity',
    'Connections for O2 supply and CO2 monitoring',
    'Protection of fibreoptical equipment',
  ];

  const companyInfo = `Stairway Medical is a Swedish medicotechnical startup company founded in 2020 by medical and dental research innovators in continuous collaboration with the Innovation and Holding units at Lund University. We develop medicotechnical solutions for upper airway patency to promote safety, comfort, predictability, efficacy and credibility during procedural sedation for unpleasant diagnostic or therapeutic interventions. Our invention, STAIRWAY, is the only useful medicotechnical device for airway patency during procedural sedation.

  Millions of procedural sedations are carried out in Europe alone each year. The total number of procedural sedations is rapidly growing in response to higher demands all over the world, and increasing numbers are run by non-anaesthesia professionals outside hospitals.

  Although procedural sedation is commonplace, it is no simple task. We have recently carried out a survey in almost one hundred anaesthetists frequently involved in procedural sedation in three healthcare regions in southern Sweden. Airway and respiratory problems are common during sedation. It is often hard to adapt sedation levels to individual needs without causing patient discomfort, interrupting the procedure, or inducing airway occlusion calling for rapid and appropriate manual airway management. Accordingly, an effective medicotechnical device for mechanical airway patency during procedural sedation is considered most desirable.`;

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">About STAIRWAY</h2>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Key Benefits of STAIRWAY</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-base md:text-lg text-gray-700">
                    {typeof benefit === 'string' ? (
                      benefit
                    ) : (
                      <div>
                        {benefit.text}{' '}
                        <Info
                          size={16}
                          className="inline-block ml-1 text-blue-500 cursor-pointer hover:text-blue-600"
                          onClick={() => setShowInfo(!showInfo)}
                        />
                        {showInfo && (
                          <div className="mt-2 p-2 bg-gray-100 rounded text-sm text-gray-700">
                            {benefit.info}
                          </div>
                        )}
                      </div>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-12">
            <img src="/images/product-studio.webp" alt="STAIRWAY Device" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mt-8 md:mt-12">
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
            STAIRWAY is an innovative device designed to maintain open airways during procedural sedation, addressing a critical need in healthcare.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            With over 50 million sedations performed outside hospitals each year, STAIRWAY aims to significantly improve patient safety and reduce complications.
          </p>
        </div>
        <div className="mt-6 md:mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-base md:text-lg"
          >
            {showMore ? 'Read Less' : 'Read More About Stairway Medical'}
            {showMore ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
          </button>
          {showMore && (
            <div className="mt-4 p-4 md:p-6 bg-gray-100 rounded-lg">
              <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">{companyInfo}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;