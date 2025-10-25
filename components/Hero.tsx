import React from 'react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="text-center py-20 sm:py-32">
      <h1 
        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight fade-in"
        style={{ animationDelay: '100ms' }}
      >
        Crafting <span className="gradient-text">Exceptional</span> Digital
        <br />
        Experiences
      </h1>
      <p 
        className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 fade-in"
        style={{ animationDelay: '300ms' }}
      >
        I'm a passionate frontend engineer specializing in building beautiful, functional, and user-centric web applications. Explore my work and let's create something amazing together.
      </p>
      <div 
        className="mt-8 flex justify-center gap-4 fade-in"
        style={{ animationDelay: '500ms' }}
      >
        <button 
          onClick={scrollToProjects}
          className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 glow"
        >
          View My Work
        </button>
        <button 
          onClick={() => {
            const chatButton = document.getElementById('chat-fab');
            if (chatButton) chatButton.click();
          }}
          className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-600 transition-all duration-300">
          Talk to My AI Liaison
        </button>
      </div>
    </section>
  );
};

export default Hero;