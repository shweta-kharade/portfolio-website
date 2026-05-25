import React from "react";
import { Link } from "react-router-dom";

import { FaCode, FaTools } from "react-icons/fa";
import { RiFolderOpenFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";

const Experience = ({ darkMode }) => {

  return (

    <div
      className={`
        flex flex-col justify-center items-center
        gap-4 px-6 md:px-20 lg:px-40 py-20
        transition-all duration-300

        ${
          darkMode
            ? "text-white bg-black"
            : "text-black bg-white"
        }
      `}
    >

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center">

        Building Digital Experiences

      </h1>

      <p
        className={`
          text-center max-w-2xl text-sm md:text-lg leading-relaxed

          ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }
        `}
      >

        I specialize in creating modern user interfaces and building
        responsive web applications with clean design and seamless user
        experiences.

      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8 w-full">

        {/* Card 1 */}
        <div
          className={`
            p-6 rounded-2xl
            transition-all duration-300
            hover:border-violet-500
            hover:scale-[1.02]

            ${
              darkMode
                ? "border border-gray-700 bg-white/5"
                : "border border-gray-300 bg-gray-100"
            }
          `}
        >

          <div className="flex items-center gap-3 mb-5">

            <FaCode className="text-violet-400 text-2xl" />

            <h2 className="text-2xl font-bold">
              Skills
            </h2>

          </div>

          <p
            className={`leading-relaxed mb-5 text-sm md:text-base ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >

            Here are some technologies and areas I work with:

          </p>

          <ul className="list-disc pl-5 space-y-3 text-sm md:text-base">

            <li>Frontend Web Development</li>

            <li>Responsive UI Design</li>

            <li>React & Tailwind CSS</li>

            <li>JavaScript & TypeScript</li>

            <li>DSA & Problem Solving</li>

            <li>REST APIs</li>

            <li>Git & GitHub</li>

          </ul>

        </div>

        {/* Card 2 */}
        <div
          className={`
            p-6 rounded-2xl
            transition-all duration-300
            hover:border-violet-500
            hover:scale-[1.02]

            ${
              darkMode
                ? "border border-gray-700 bg-white/5"
                : "border border-gray-300 bg-gray-100"
            }
          `}
        >

          <div className="flex items-center gap-3 mb-5">

            <FaTools className="text-violet-400 text-2xl" />

            <h2 className="text-2xl font-bold">
              Tools I Use
            </h2>

          </div>

          <p
            className={`leading-relaxed mb-5 text-sm md:text-base ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >

            I use modern tools and technologies to build clean and scalable
            applications.

          </p>

          <ul className="list-disc pl-5 space-y-4 text-sm md:text-base">

            <li>

              <span className="font-semibold">
                Frontend:
              </span>

              <br />

              <span className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }>
                HTML, CSS, JavaScript, React, Tailwind CSS
              </span>

            </li>

            <li>

              <span className="font-semibold">
                Backend:
              </span>

              <br />

              <span className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }>
                Node.js, Express.js, MongoDB
              </span>

            </li>

            <li>

              <span className="font-semibold">
                Design:
              </span>

              <br />

              <span className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }>
                Figma, Canva, Framer
              </span>

            </li>

            <li>

              <span className="font-semibold">
                Tools:
              </span>

              <br />

              <span className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }>
                VS Code, Git, GitHub
              </span>

            </li>

          </ul>

        </div>

        {/* Card 3 */}
        <div
          className={`
            p-6 rounded-2xl
            transition-all duration-300
            hover:border-violet-500
            hover:scale-[1.02]

            ${
              darkMode
                ? "border border-gray-700 bg-white/5"
                : "border border-gray-300 bg-gray-100"
            }
          `}
        >

          <div className="flex items-center gap-3 mb-5">

            <MdDesignServices className="text-violet-400 text-2xl" />

            <h2 className="text-2xl font-bold">
              UI/UX Design
            </h2>

          </div>

          <p
            className={`leading-relaxed mb-5 text-sm md:text-base ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >

            I enjoy designing clean, modern, and user-friendly interfaces that
            provide a smooth experience.

          </p>

          <ul className="list-disc pl-5 space-y-3 text-sm md:text-base">

            <li>User-Centered Design</li>

            <li>Modern & Minimal UI</li>

            <li>Responsive Layouts</li>

            <li>Wireframes & Prototypes</li>

            <li>Clean Typography</li>

            <li>Interactive Components</li>

          </ul>

        </div>

      </div>

      {/* Button */}
      <Link
        to="/projects"
        className={`
          flex flex-row items-center
          px-10 md:px-12 py-3 gap-2
          mt-12 rounded-xl
          transition-all duration-300
          text-sm md:text-base
          hover:scale-105
          border

          ${
            darkMode
              ? "border-gray-400 hover:bg-violet-900/20"
              : "border-gray-400 hover:bg-violet-100"
          }
        `}
      >

        <RiFolderOpenFill className="text-violet-400 text-2xl" />

        <p>View my Projects</p>

      </Link>

    </div>
  );
};

export default Experience;