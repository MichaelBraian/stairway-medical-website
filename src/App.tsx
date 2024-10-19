import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductShowcase from './components/ProductShowcase';
import Team from './components/Team';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <ProductShowcase />
      <Team />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;