import React from 'react';
import Navbar from './Component/navbar';
import Conent from './Component/conent';

const App = () => {
  const generateSquares = (count) => {
    return Array.from({ length: count }, (_, index) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * (16 - 8) + 8;
      const delay = Math.random() * 5; 
      return (
        <div
          key={index}
          className="absolute bg-green-300 opacity-80 animate-float w-12 md:w-16 h-12 md:h-16"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
  };

  return (
    <>
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

      <div
        className="absolute inset-0 bg-gray-100"
        style={{
          backgroundImage: 'linear-gradient(to right,rgb(255, 255, 255) 1px, transparent 1px), linear-gradient(to bottom,rgb(255, 255, 255) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {generateSquares(25)}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-green-200" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-4 h-full">
        <div className='mr-2'>

        <Navbar />
        </div>
        <section className="mt-10 text-center py-12 md:py-30 lg:py-34 px-4 relative flex flex-col items-center justify-center">
          <div className="inline-flex items-center bg-black text-white px-3 md:px-4 py-1 md:py-2 rounded-full mb-4 text-xs md:text-sm">
            <span className="mr-2">🌿</span>
            <span>Let's Save our Environment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-5xl">
            Streamline Your Sustainability Reporting With
            <span className="text-green-600"> CARBON CRUNCH</span>
          </h1>

          <p className="text-gray-600 mb-8 text-sm md:text-base">
            <span className="text-green-600 font-semibold">95%</span> Accurate Carbon Calculations Trusted by Industry Leaders
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-md">
            <button className="px-6 md:px-8 py-2 md:py-3 bg-white border border-green-500 text-green-500 rounded-lg shadow hover:bg-green-100 text-sm md:text-base w-full sm:w-auto">
              Free Calculator
            </button>
            <button className="px-6 md:px-8 py-2 md:py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 text-sm md:text-base w-full sm:w-auto">
              Book Demo
            </button>
          </div>
        </section>
      </div>
    </div>
      <Conent />
      </>
  );

};

export default App;