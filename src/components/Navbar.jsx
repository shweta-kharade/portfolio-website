import React from "react";
import { Link } from "react-router-dom";

import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`
        w-full h-20
        flex justify-between items-center
        px-8 md:px-16
        fixed top-0 left-0 z-50
        border-b
        transition-all duration-300

        ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black border-gray-300"
        }
      `}
    >

      {/* Left Side */}
      <div className="flex items-center gap-10">

        <Link
          to="/"
          className="bg-gradient-to-b from-violet-300 to-violet-900 bg-clip-text text-transparent text-3xl font-bold"
        >
          Shweta.dev
        </Link>

        <Link
          to="/"
          className="hover:text-violet-400 duration-300"
        >
          Home
        </Link>

        <Link
          to="/projects"
          className="hover:text-violet-400 duration-300"
        >
          Projects
        </Link>

        <Link
          to="/contact"
          className="hover:text-violet-400 duration-300"
        >
          Contact
        </Link>

      </div>

      {/* Theme Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-xl"
      >

        {
          darkMode ? (

            <FaSun className="cursor-pointer text-yellow-300 hover:rotate-180 duration-500" />

          ) : (

            <FaMoon className="cursor-pointer text-violet-700 hover:rotate-12 duration-500" />

          )
        }

      </button>

    </div>
  );
};

export default Navbar;