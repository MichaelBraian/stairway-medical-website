import React from 'react';

const News = () => {
  const newsItems = [
    {
      title: 'STAIRWAY Completes Key Milestones',
      date: 'May 15, 2023',
      summary: 'Stairway Medical has achieved significant milestones, including verifying customer needs, developing a working prototype, patenting the invention globally, and starting CE approval process.',
      link: '#',
    },
    {
      title: 'Clinical Trials Show Promising Results',
      date: 'June 2, 2023',
      summary: 'Randomized clinical trials demonstrate that STAIRWAY can prevent more than 80% of respiratory arrests during standardized start-up of light sedation and moderate-to-deep sedation in healthy volunteers.',
      link: '#',
    },
    {
      title: 'STAIRWAY Aims to Reduce Healthcare Costs',
      date: 'July 10, 2023',
      summary: 'Complications of procedural sedation are estimated to increase healthcare costs in the US by $2 billion/year. STAIRWAY device aims to significantly reduce these costs.',
      link: '#',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.date}</p>
                <p className="text-gray-700 mb-4">{item.summary}</p>
                <a
                  href={item.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;