import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeatureHighlight from './components/FeatureHighlight';
import ProductShowcase from './components/ProductShowcase';
import Team from './components/Team';
import News from './components/News';
import Sedator from './components/Sedator'; // Import the new component
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <FeatureHighlight />
      <ProductShowcase />
      <Team />
      <News />
      <Sedator /> {/* Add the new component here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
