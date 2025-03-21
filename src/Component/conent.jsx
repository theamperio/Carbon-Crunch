import React from 'react'

const Content = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden p-4">
      {/* Desktop and tablet layout */}
      <div className="hidden md:block mt-8 md:mt-16 lg:mt-25">
        <div className="mx-auto max-w-5xl h-96 md:h-[500px] lg:h-[600px] relative">
          {/* Gray background rectangle */}
          <div className="absolute top-0 left-0 w-7/12 h-full bg-gray-300 "></div>
          
          {/* 3X ESG Stat Box */}
          <div className="absolute top-12 right-12 lg:top-16 lg:right-16 bg-green-500 p-4 rounded-lg w-72 lg:w-80 shadow-lg z-10">
            <div className="text-5xl lg:text-6xl font-bold">3X</div>
            <div className="text-sm lg:text-base mt-2">
              ESG High Performers Deliver A Higher Total Shareholder Return
            </div>
          </div>
          
          {/* 98% Stat Box */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-gray-700 p-4 rounded-lg w-72 shadow-lg z-10">
            <div className="text-4xl lg:text-5xl font-bold">98%</div>
            <div className="text-sm lg:text-base mt-2">
              Of CEOs Agree Sustainability Is Their Responsibility
            </div>
          </div>
          
          {/* 18% Stat Box */}
          <div className="absolute top-2/4 right-12 lg:right-36 bg-gray-800 p-4 rounded-lg w-64 shadow-lg text-right z-10">
            <div className="text-4xl lg:text-5xl font-bold">18%</div>
            <div className="text-sm lg:text-base mt-2">
              Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050
            </div>
          </div>
          
          {/* 37% Stat Box with Highlight */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black p-4 rounded-lg w-80 lg:w-96 shadow-lg z-10">
            <div className="text-4xl lg:text-5xl font-bold text-green-500">37%</div>
            <div className="text-sm lg:text-base mt-2 text-green-600">
              Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile layout - stacked in a column */}
      <div className="md:hidden mt-10 flex flex-col space-y-4">
        
        {/* 3X ESG Stat Box */}
        <div className="bg-green-500 p-4 rounded-lg w-full shadow-lg">
          <div className="text-4xl font-bold">3X</div>
          <div className="text-sm mt-2">
            ESG High Performers Deliver A Higher Total Shareholder Return
          </div>
        </div>
        
        {/* 98% Stat Box */}
        <div className="bg-gray-700 p-4 rounded-lg w-full shadow-lg">
          <div className="text-4xl font-bold">98%</div>
          <div className="text-sm mt-2">
            Of CEOs Agree Sustainability Is Their Responsibility
          </div>
        </div>
        
        {/* 18% Stat Box */}
        <div className="bg-gray-800 p-4 rounded-lg w-full shadow-lg">
          <div className="text-4xl font-bold">18%</div>
          <div className="text-sm mt-2">
            Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050
          </div>
        </div>
        
        {/* 37% Stat Box with Highlight */}
        <div className="bg-white text-black p-4 rounded-lg w-full shadow-lg">
          <div className="text-4xl font-bold text-green-500">37%</div>
          <div className="text-sm mt-2 text-green-600">
            Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;