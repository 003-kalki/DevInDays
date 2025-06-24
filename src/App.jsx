import React from 'react'; 
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Navbar from './components/ui/Navbar';
import HeroSection from './components/pages/HeroSection';
import Footer from './components/pages/Footer';
import FinalCTA from './components/pages/FinalCTA';
import HowItWorks from './components/pages/HowItWorks';
import Pricing from './components/pages/Pricing';
import WhatWeDo from './components/pages/WhatWeDo';
import WhyUs from './components/pages/WhyUS';
import RealProjects from './components/pages/RealProjects';
function App() {

  return (
      <BrowserRouter>
      <Navbar/>
      <HeroSection/>
      <WhatWeDo/>
      <Pricing/>
      <HowItWorks/>
      <RealProjects/>
      <WhyUs/>
      <FinalCTA/>
       <Footer/>
      </BrowserRouter>
  )
}

export default App
