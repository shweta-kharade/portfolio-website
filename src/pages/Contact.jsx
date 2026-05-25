import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen flex justify-center items-center px-6 py-20 transition-all duration-300 relative overflow-hidden
      ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Glow Effect */}
      <div className="absolute w-96 h-96 bg-violet-600 rounded-full blur-[140px] opacity-20"></div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center gap-8">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Let's Connect
        </h1>

        {/* Description */}
        <p
          className={`text-lg leading-relaxed max-w-2xl
          ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Have a project idea, collaboration, or just want to say hello?
          Feel free to reach out anytime.
        </p>

        {/* Email Button */}
        <a
          href="mailto:yourmail@example.com"
          className="px-8 py-3 border border-violet-500 rounded-xl hover:bg-violet-700 hover:text-white transition-all duration-300 hover:scale-105"
        >
          yourmail@example.com
        </a>

        {/* Social Icons */}
        <div className="flex gap-8 text-3xl mt-4">

          {/* GitHub */}
          <a
            href="https://github.com/shweta-kharade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-violet-400 transition-all duration-300 hover:scale-125" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shweta-kharade-29aaa335a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition-all duration-300 hover:scale-125" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition-all duration-300 hover:scale-125" />
          </a>

        </div>

      </div>

    </div>
  );
};

export default Contact;