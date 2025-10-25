import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntersectionDiagram from './components/IntersectionDiagram';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 aurora-bg relative">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <IntersectionDiagram />
        <Projects />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;