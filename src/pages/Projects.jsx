import React from "react";

import campusconnect from "../assets/campusconnect.png";
import todo from "../assets/todo-app.png";
import ox from "../assets/tic-tac-toe.jpeg";
import weather from "../assets/weather-app.jpeg";

const Projects = ({ darkMode }) => {

  return (

    <div
      className={`
        flex justify-center px-6 py-10 min-h-screen transition-all duration-300

        ${
          darkMode
            ? "bg-black text-white"
            : "bg-white text-black"
        }
      `}
    >

      <div className="w-full max-w-7xl flex flex-col gap-5">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Projects
        </h1>

        <p
          className={`
            text-lg

            ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }
          `}
        >
          Here you will find a selection of projects I have worked on.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {/* Card 1 */}
          <a
            href="http://localhost/campusconnect/pages/feed.php"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >

            <div
              className={`
                rounded-2xl overflow-hidden
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]

                ${
                  darkMode
                    ? "border border-gray-700 bg-white/5 hover:border-violet-500"
                    : "border border-gray-300 bg-gray-100 hover:border-violet-500"
                }
              `}
            >

              <img
                src={campusconnect}
                alt="CampusConnect"
                className="w-full h-60 object-cover"
              />

              <div className="p-6 flex flex-col gap-3">

                <h1 className="text-2xl font-bold">
                  CampusConnect
                </h1>

                <p
                  className={`leading-relaxed ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >

                  A social media platform designed to connect students and
                  teachers inside the campus ecosystem.

                </p>

              </div>

            </div>

          </a>

          {/* Card 2 */}
          <a
            href="https://todo-react-cyan-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >

            <div
              className={`
                rounded-2xl overflow-hidden
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]

                ${
                  darkMode
                    ? "border border-gray-700 bg-white/5 hover:border-violet-500"
                    : "border border-gray-300 bg-gray-100 hover:border-violet-500"
                }
              `}
            >

              <img
                src={todo}
                alt="Task Manager"
                className="w-full h-60 object-cover"
              />

              <div className="p-6 flex flex-col gap-3">

                <h1 className="text-2xl font-bold">
                  Task Manager
                </h1>

                <p
                  className={`leading-relaxed ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >

                  A productivity application to organize and manage daily tasks
                  efficiently.

                </p>

              </div>

            </div>

          </a>

          {/* Card 3 */}
          <a
            href="https://weather-app-29gr.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >

            <div
              className={`
                rounded-2xl overflow-hidden
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]

                ${
                  darkMode
                    ? "border border-gray-700 bg-white/5 hover:border-violet-500"
                    : "border border-gray-300 bg-gray-100 hover:border-violet-500"
                }
              `}
            >

              <img
                src={weather}
                alt="Weather App"
                className="w-full h-60 object-cover"
              />

              <div className="p-6 flex flex-col gap-3">

                <h1 className="text-2xl font-bold">
                  Weather Application
                </h1>

                <p
                  className={`leading-relaxed ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >

                  A real-time weather application to check weather conditions
                  anywhere.

                </p>

              </div>

            </div>

          </a>

          {/* Card 4 */}
          <a
            href="https://shweta-kharade.github.io/tic-tac-toe-website/ox.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >

            <div
              className={`
                rounded-2xl overflow-hidden
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]

                ${
                  darkMode
                    ? "border border-gray-700 bg-white/5 hover:border-violet-500"
                    : "border border-gray-300 bg-gray-100 hover:border-violet-500"
                }
              `}
            >

              <img
                src={ox}
                alt="Tic Tac Toe"
                className="w-full h-60 object-cover"
              />

              <div className="p-6 flex flex-col gap-3">

                <h1 className="text-2xl font-bold">
                  Tic Tac Toe Game
                </h1>

                <p
                  className={`leading-relaxed ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >

                  A fun and interactive Tic Tac Toe game built with React.

                </p>

              </div>

            </div>

          </a>

        </div>

      </div>

    </div>
  );
};

export default Projects;