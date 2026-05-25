import React from "react";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`
        relative overflow-hidden
        mt-20 px-6 md:px-16 py-10 border-t
        transition-all duration-300

        ${
          darkMode
            ? "bg-black text-white border-gray-800"
            : "bg-white text-black border-gray-300"
        }
      `}
    >

      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-violet-600 blur-[140px] opacity-10"></div>

      <div className="relative z-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left */}
          <div className="flex flex-col gap-2">

            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-700 bg-clip-text text-transparent hover:opacity-80 duration-300"
            >
              Shweta.dev
            </Link>

            <p
              className={`${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Shweta Kondu Kharade
            </p>

            <p
              className={`text-sm ${
                darkMode
                  ? "text-gray-500"
                  : "text-gray-500"
              }`}
            >
              Based in India
            </p>

          </div>

          {/* Right */}
          <div
            className={`max-w-md leading-relaxed text-sm md:text-base ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >

            Website designed in Figma.
            Built with React, Tailwind CSS, and modern web technologies.

          </div>

        </div>

        {/* Bottom */}
        <div
          className={`
            flex flex-col md:flex-row
            justify-between items-center
            gap-6 mt-10 pt-6 border-t

            ${
              darkMode
                ? "border-gray-800"
                : "border-gray-300"
            }
          `}
        >

          <p
            className={`text-sm text-center ${
              darkMode
                ? "text-gray-500"
                : "text-gray-500"
            }`}
          >
            © 2026 Shweta. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">

            {/* GitHub */}
            <a
              href="https://github.com/shweta-kharade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer hover:text-violet-400 hover:scale-125 transition-all duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shweta-kharade-29aaa335a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:text-blue-400 hover:scale-125 transition-all duration-300" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-pink-500 hover:scale-125 transition-all duration-300" />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;