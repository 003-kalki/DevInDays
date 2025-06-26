import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import { AuroraHero } from "./components/pages/HeroSection";
import Footer from "./components/pages/Footer";
import FinalCTA from "./components/pages/FinalCTA";
import HowItWorks from "./components/pages/HowItWorks";
import Pricing from "./components/pages/Pricing";
import WhatWeDo from "./components/pages/WhatWeDo";
import WhyUs from './components/pages/WhyUs';
import RealProjects from "./components/pages/RealProjects";
import idea from "./assets/idea.jpg";
import code from "./assets/code.jpg";
import launch from "./assets/launch.jpg";

const steps = [
  {
    title: "Step 1: Share Your Idea 💡",
    description:
      "Kick things off by sharing your product idea. We'll help you identify your core feature set and offer instant feedback.",
    content: (
      <div className="flex items-center justify-center h-full w-full bg-white p-2 text-black font-semibold text-lg rounded-md overflow-hidden">
        <img
          src={idea}
          alt="Idea"
          className="object-cover h-full w-full rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Step 2: We Scope & Start Building ⚒️",
    description:
      "We create a clear scope and timeline, and begin development right away using modern tech tools and agile methods.",
    content: (
      <div className="flex items-center justify-center h-full w-full bg-white p-2 text-black font-semibold text-lg rounded-md overflow-hidden">
        <img
          src={code}
          alt="Code Build"
          className="object-cover h-full w-full rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Step 3: Launch in 2–3 Weeks 🚀",
    description:
      "We deliver your working MVP, help with launch setup, and support post-launch with revisions or scaling needs.",
    content: (
      <div className="flex items-center justify-center h-full w-full bg-white p-2 text-black font-semibold text-lg rounded-md overflow-hidden">
        <img
          src={launch}
          alt="App Launch"
          className="object-cover h-full w-full rounded-md"
        />
      </div>
    ),
  },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AuroraHero />
      <WhatWeDo />
      <Pricing />
      <HowItWorks steps={steps} />
      <RealProjects />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
