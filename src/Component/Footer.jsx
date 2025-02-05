import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full -mb-96 text-white ">
      <div className="container mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-2xl font-bold">Your Counsellor</h2>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaYoutube />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6 text-white">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#service" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>

        {/* Copyright Section */}
        <p className="mt-4 text-white">
          Copyright © {new Date().getFullYear()} All rights reserved by <strong>Your Counsellor</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
