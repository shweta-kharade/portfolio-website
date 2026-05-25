import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import avatar from "./avatar.png";

import Experience from "../components/Experience";
import Ideas from "../components/Ideas";

const Home = ({ darkMode }) => {
  return (
    <>
      {/* Main Section */}
      <div
        className={`
          relative w-full min-h-[85vh]
          px-10 py-10
          flex justify-center items-center
          overflow-hidden
          transition-all duration-300

          ${
            darkMode
              ? "bg-black text-white"
              : "bg-white text-black"
          }
        `}
      >

        {/* Gradient Glow */}
        <div className="absolute w-96 h-96 bg-violet-700 rounded-full blur-[120px] opacity-30"></div>

        {/* Content */}
        <div
          className={`
            relative z-10
            flex flex-col justify-center items-center
            gap-9
            text-center

            ${
              darkMode
                ? "text-white"
                : "text-black"
            }
          `}
        >

          {/* Avatar + Heading */}
          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src={avatar}
              alt="avatar"
              className="w-40 h-40 rounded-full object-cover border-2 border-violet-400"
            />

            <div className="text-4xl md:text-6xl font-bold leading-tight">

              Hey, I'm{" "}

              <span className="bg-gradient-to-b from-violet-300 to-violet-900 bg-clip-text text-transparent">
                Shweta
              </span>

              ✨

              <br />

              <span className="bg-gradient-to-b from-violet-300 to-violet-900 bg-clip-text text-transparent">

                A Software Engineering
                <br />

                Student

              </span>

            </div>

          </div>

          {/* Description */}
          <div className="text-lg md:text-xl leading-relaxed max-w-3xl">

            <span className="font-bold">
              A fullstack developer
            </span>

            {" "}with solid foundations in{" "}

            <span className="font-bold">
              design.
            </span>

            <br />

            Passionate about crafting seamless user experiences.
            I thrive at the intersection of creativity and functionality.

          </div>

          {/* Buttons + Socials */}
          <div className="flex flex-wrap justify-center items-center gap-4">

            {/* Contact */}
            <Link to="/contact">

              <button
                className={`
                  border px-6 py-2 rounded
                  hover:bg-violet-700 hover:text-white
                  duration-300

                  ${
                    darkMode
                      ? "border-gray-400"
                      : "border-gray-700"
                  }
                `}
              >

                @ Contact Me

              </button>

            </Link>

            {/* Projects */}
            <Link to="/projects">

              <button
                className={`
                  border px-6 py-2 rounded
                  hover:bg-violet-700 hover:text-white
                  duration-300

                  ${
                    darkMode
                      ? "border-gray-400"
                      : "border-gray-700"
                  }
                `}
              >

                View Projects

              </button>

            </Link>

            {/* Divider */}
            <div
              className={`
                w-px h-6 mx-3

                ${
                  darkMode
                    ? "bg-gray-500"
                    : "bg-gray-700"
                }
              `}
            />

            {/* Social Icons */}
            <div className="flex gap-7 text-2xl">

              {/* Github */}
              <a
                href="https://github.com/shweta-kharade/"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaGithub className="cursor-pointer hover:text-violet-400 duration-300" />

              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shweta-kharade-29aaa335a/"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaLinkedin className="cursor-pointer hover:text-blue-400 duration-300" />

              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaInstagram className="cursor-pointer hover:text-pink-500 duration-300" />

              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Other Sections */}
      <Experience darkMode={darkMode} />

      <Ideas darkMode={darkMode}/>

    </>
  );
};

export default Home;
