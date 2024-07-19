import React, { useState } from 'react';
import GrapplTechLogo from '../assets/GrapplTechLogo.png'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white px-5 py-3 mx-10 mt-3">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={GrapplTechLogo} alt="Your Logo" className="h-8 w-auto" />
          <span className="text-black text-lg font-bold ml-2">GrapplTech</span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-12">
          <a href="#" className="text-black hover:text-sky-700">Home</a>
          <a href="#about" className="text-black hover:text-sky-700">About</a>
          <a href="#" className="text-black hover:text-sky-700">Services</a>
          <a href="#" className="text-black hover:text-sky-700">Contact</a>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block bg-white' : 'hidden'} w-full`}>
        <div className="flex flex-col space-y-4 p-4">
          <a href="#" className="text-black hover:text-sky-700">Home</a>
          <a href="#" className="text-black hover:text-sky-700">About</a>
          <a href="#" className="text-black hover:text-sky-700">Services</a>
          <a href="#" className="text-black hover:text-sky-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;