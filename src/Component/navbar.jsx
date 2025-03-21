import React, { useState, useEffect } from "react";
import image from "../assets/Frame.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navtitle = ["Home", "Features", "Pricing", "Contact Us"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed z-50 w-full md:bg-transparent top-4 right-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-white/20 backdrop-blur-lg rounded-lg">
          {/* Logo Section */}
          <div className="flex-shrink-0 ml-4">
            <img
              src={image}
              alt="Carboncrunch"
              className="w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 bg-white border border-gray-200 rounded-lg px-3 py-1">
            {navtitle.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 mr-4">
            <button className="px-4 py-2 text-sm font-medium text-green-600 bg-white border border-green-600 rounded-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Login
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Book Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mr-4">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'fixed' : 'hidden'} inset-0 z-50 md:hidden bg-white w-70 overflow-y-auto`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Close button */}
          <div className="flex justify-end p-2">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {navtitle.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            <button className="w-full px-4 py-2 text-sm font-medium text-green-600 bg-white border border-green-600 rounded-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mb-2">
              Login
            </button>
          </div>
          <div className="flex items-center px-5 mt-3">
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;