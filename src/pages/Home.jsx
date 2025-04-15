import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home; 