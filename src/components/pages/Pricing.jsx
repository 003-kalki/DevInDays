import React from 'react';
import { WobbleCard } from '../ui/wobble-card';
import { Check } from 'lucide-react';

const pricingData = [
  {
    title: '🚀 MVP Launch',
    price: '$799',
    description: 'For early-stage validation and demos.',
    gradient: 'from-[#ec008c] to-[#fc6767]',
    features: [
      'Cross-platform mobile app (Flutter)',
      'Up to 5 key screens',
      'Clean UI (based on references)',
      'Firebase/static backend',
      'Basic auth, forms, logic',
      '7–10 day delivery',
      '1 round of revisions',
      '7 days post-launch support',
      'Full code ownership'
    ],
    buttonText: 'Start With MVP'
  },
  {
    title: '🚀 Standard Build',
    price: '$1,999',
    description: 'For launching to real users.',
    gradient: 'from-[#6a11cb] to-[#2575fc]',
    features: [
      'Custom-designed mobile app',
      'Up to 12 screens',
      'Auth, APIs, logic flows',
      'Firebase or custom backend',
      'Third-party integrations',
      '2–3 week delivery',
      '2 revision rounds',
      '14 days post-launch support',
      'Full code ownership'
    ],
    buttonText: 'Go With Standard'
  },
  {
    title: '🧠 Custom Build',
    price: 'Quote-Based',
    description: 'For complex, scalable products.',
    gradient: 'from-[#396afc] to-[#2948ff]',
    features: [
      'Web + mobile apps',
      'Dashboards, admin panels',
      'AI, real-time, role-based features',
      'Scalable backend & custom infra',
      'Long-term support available'
    ],
    buttonText: 'Get Custom Quote'
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b8793] to-[#360033] px-4 py-12 sm:py-20 flex flex-col items-center">
      <h1 className="text-center max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-10">
        Built for speed, clarity, and real outcomes.
      </h1>
      <p className="text-white text-base sm:text-lg mb-12 text-center max-w-2xl px-4">
        Choose what fits your stage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {pricingData.map((plan, index) => (
          <WobbleCard
            key={index}
            containerClassName={`bg-gradient-to-br ${plan.gradient} text-white relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_#ffffff44] hover:brightness-110`}
            className="min-h-[300px] flex flex-col justify-between p-6"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
              <p className="text-lg font-semibold gradient-text mb-2">{plan.price}</p>
              <p className="text-sm mb-4 text-white/80">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-white mr-2 mt-1" size={16} />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="bg-white text-black rounded-md py-2 px-4 font-semibold hover:bg-opacity-90 transition duration-300"
            >
              {plan.buttonText}
            </button>
          </WobbleCard>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
