import React from 'react';

const IntersectionDiagram: React.FC = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 fade-in" style={{ animationDelay: '700ms' }}>
        Where Innovation Happens
      </h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Central intersection point */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold text-lg">Matt Levine</span>
          </div>
        </div>

        {/* Business Operations */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
          <div className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
            <h3 className="font-semibold">Business Operations</h3>
            <p className="text-sm opacity-90">Sales, Process, Analytics</p>
          </div>
          <div className="w-1 h-16 bg-blue-500 mx-auto mt-2"></div>
        </div>

        {/* AI & Automation */}
        <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            <h3 className="font-semibold">AI & Automation</h3>
            <p className="text-sm opacity-90">ML, Workflows, Intelligence</p>
          </div>
          <div className="w-16 h-1 bg-green-500 absolute top-1/2 -left-16 transform -translate-y-1/2"></div>
        </div>

        {/* Music & Audio */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
          <div className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg">
            <h3 className="font-semibold">Music & Audio</h3>
            <p className="text-sm opacity-90">Guitar, Electronics, Sound</p>
          </div>
          <div className="w-1 h-16 bg-purple-500 mx-auto mb-2"></div>
        </div>

        {/* Creative Technology */}
        <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
          <div className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg">
            <h3 className="font-semibold">Creative Technology</h3>
            <p className="text-sm opacity-90">Design, Innovation, Products</p>
          </div>
          <div className="w-16 h-1 bg-orange-500 absolute top-1/2 -right-16 transform -translate-y-1/2"></div>
        </div>

        {/* Intersection highlights */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-blue-500/20 border-2 border-blue-500 rounded-lg p-3 text-center">
            <p className="text-sm font-medium text-blue-300">Sales Operations</p>
            <p className="text-xs text-blue-200">+ AI Automation</p>
          </div>
        </div>

        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <div className="bg-green-500/20 border-2 border-green-500 rounded-lg p-3 text-center">
            <p className="text-sm font-medium text-green-300">AI Platforms</p>
            <p className="text-xs text-green-200">+ Creative Vision</p>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2">
          <div className="bg-purple-500/20 border-2 border-purple-500 rounded-lg p-3 text-center">
            <p className="text-sm font-medium text-purple-300">Music Tech</p>
            <p className="text-xs text-purple-200">+ Business Impact</p>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <div className="bg-orange-500/20 border-2 border-orange-500 rounded-lg p-3 text-center">
            <p className="text-sm font-medium text-orange-300">Creative Products</p>
            <p className="text-xs text-orange-200">+ Technical Depth</p>
          </div>
        </div>

        {/* Central intersection description */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 z-20">
          <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center max-w-xs">
            <p className="text-sm text-gray-200">
              <span className="text-indigo-300 font-semibold">Unique Value:</span> Operating at the intersection where 
              <span className="text-white"> business meets creativity meets technology</span>
            </p>
          </div>
        </div>
      </div>

      {/* Key differentiators */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center fade-in" style={{ animationDelay: '900ms' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">+</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Business + AI</h3>
          <p className="text-gray-400 text-sm">70% efficiency gains through intelligent automation</p>
        </div>

        <div className="text-center fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">+</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Music + Tech</h3>
          <p className="text-gray-400 text-sm">Creative products with technical precision</p>
        </div>

        <div className="text-center fade-in" style={{ animationDelay: '1100ms' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">+</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">AI + Creativity</h3>
          <p className="text-gray-400 text-sm">Innovative solutions that scale and inspire</p>
        </div>
      </div>
    </div>
  );
};

export default IntersectionDiagram;
