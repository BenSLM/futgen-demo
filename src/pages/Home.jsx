import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ProblemSection from '../components/ProblemSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home; 