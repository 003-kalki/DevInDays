import React from 'react';
import { WobbleCard } from '../ui/wobble-card';
import cardimage1 from '../../assets/cardimage1.png';

const cardData = [
  {
    title: "🚀 MVP Development",
    description: "Fast builds to validate your idea.",
    gradient: "from-[#ec008c] to-[#fc6767]",
  },
  {
    title: "💻 Full App Development",
    description: "Cross-platform apps with backend/API",
    gradient: "from-[#6a11cb] to-[#2575fc]",
    hasImage: true,
  },
  {
    title: "🤖 AI & Automation",
    description: "Smart features that scale.",
    gradient: "from-[#396afc] to-[#2948ff]",
  },
  {
    title: "🎨 UI/UX Design",
    description: "Clean, intuitive interfaces.",
    gradient: "from-[#00c6ff] to-[#0072ff]",
  },
  {
    title: "🧠 Product Consulting",
    description: "Get clarity before you build.",
    gradient: "from-[#f953c6] to-[#b91d73]",
  },
];

const areaNames = ['header', 'main', 'sidebar', 'twin1', 'twin2'];

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#360033] to-[#0b8793] px-4 py-12 sm:py-20 flex flex-col items-center">
      <h1 className="text-center max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8">
        We Build Apps for Founders. Fast.
      </h1>
      <p className="text-white text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-2xl px-4">
        Let's build your app with stunning speed and quality.
      </p>

      <div className="w-full max-w-6xl">
        {/* Mobile layout */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:hidden">
          {cardData.map((card, index) => (
            <div key={index} className="w-full">
              <WobbleCard
                containerClassName={`bg-gradient-to-br ${card.gradient} text-white relative overflow-hidden`}
                className="min-h-[150px] sm:min-h-[180px] flex flex-col justify-center p-4"
              >
                <div className="relative z-10">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h2>
                  <p className="text-sm sm:text-base">{card.description}</p>
                </div>
                {card.hasImage && (
                  <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-36 sm:h-36 opacity-3 pointer-events-none">
                    <img 
                      src={cardimage1} 
                      alt="App Development" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              </WobbleCard>
            </div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid gap-6
          md:grid-cols-[2fr_1fr]
          md:grid-rows-[auto_auto_auto]
          md:[grid-template-areas:'header_sidebar''main_twin1''twin2_twin2']"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full"
              style={{
                gridArea: areaNames[index] || 'auto',
              }}
            >
              <WobbleCard
                containerClassName={`bg-gradient-to-br ${card.gradient} text-white relative overflow-hidden`}
                className="min-h-[200px] lg:min-h-[250px] flex flex-col justify-center p-6"
              >
                <div className="relative z-10">
                  <h2 className="text-xl lg:text-2xl font-semibold mb-2">{card.title}</h2>
                  <p className="text-base lg:text-lg">{card.description}</p>
                </div>
                {card.hasImage && (
                  <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-44 lg:h-44 opacity-2 pointer-events-none">
                    <img 
                      src={cardimage1} 
                      alt="App Development" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              </WobbleCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
