// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="uppercase mb-6 font-bold">Pages</h5>
            <ul className="space-y-4">
              <li className="transform transition duration-300 hover:text-gray-400 hover:scale-105">
                <a href="#">About Us</a>
              </li>
              <li className="transform transition duration-300 hover:text-gray-400 hover:scale-105">
                <a href="#">Careers</a>
              </li>
              <li className="transform transition duration-300 hover:text-gray-400 hover:scale-105">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="uppercase mb-6 font-bold">Support</h5>
            <ul className="space-y-4">
              <li className="transform transition duration-300 hover:text-gray-400 hover:scale-105">
                <a href="#">Help Center</a>
              </li>
              <li className="transform transition duration-300 hover:text-gray-400 hover:scale-105">
                <a href="#">Safety Center</a>
              </li>
              <li className="transform transition duration-300 hover:text-gray-400 hover:scale-105">
                <a href="#">Community Guidelines</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="space-y-4">
              <li className="transform transition duration-300 hover:text-gray-400 hover:scale-105">
                <a href="#">Cookies Policy</a>
              </li>
              <li className="transform transition duration-300 hover:text-gray-400 hover:scale-105">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="transform transition duration-300 hover:text-gray-400 hover:scale-105">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">© 2024 Portfolio of  Turab_Ali</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
