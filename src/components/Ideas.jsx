import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Ideas = ({ darkMode }) => {

  const [state, handleSubmit] = useForm("mnjrgdll");

  if (state.succeeded) {
    return (
      <p className="text-white text-center text-2xl">
        Message sent successfully ✨
      </p>
    );
  }


  return (
    <div
      className={`
        flex justify-center items-center
        px-6 py-20
        transition-all duration-300

        ${darkMode ? "bg-black" : "bg-white"}
      `}
    >
      <div
        className={`
          w-full max-w-7xl
          flex flex-col lg:flex-row
          gap-12 p-8 md:p-12 rounded-3xl
          border transition-all duration-300

          ${
            darkMode
              ? "border-gray-700 text-white bg-white/5"
              : "border-gray-300 text-black bg-gray-100"
          }
        `}
      >
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl leading-tight font-bold bg-gradient-to-r from-violet-400 to-purple-700 bg-clip-text text-transparent">
            Bringing your ideas to life.
            <br />
            Let's turn your vision into reality.
          </h1>

          <p
            className={`
              leading-relaxed mt-6 text-lg

              ${darkMode ? "text-gray-400" : "text-gray-600"}
            `}
          >
            Have a project in mind or just want to chat? Let's connect!
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          //className="flex-1 flex flex-col gap-5 border border-gray-700 p-8 rounded-2xl bg-gray-950"
          className={`
            flex-1 flex flex-col gap-5
            p-8 rounded-2xl border
            transition-all duration-300

            ${
              darkMode
                ? "border-gray-700 bg-gray-950"
                : "border-gray-300 bg-white"
            }
          `}
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Name
            </label>

            <input
              type="text"
              name='name'
              placeholder="Your Name"
              className={`
                py-3 px-4 rounded-xl border
                outline-none transition-all duration-300

                ${
                  darkMode
                    ? "bg-black border-gray-700 text-white focus:border-violet-500"
                    : "bg-gray-100 border-gray-300 text-black focus:border-violet-500"
                }
              `}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Email
            </label>

            <input
              type="email"
              name='email'
              placeholder="contact@example.com"
              className={`
                py-3 px-4 rounded-xl border
                outline-none transition-all duration-300

                ${
                  darkMode
                    ? "bg-black border-gray-700 text-white focus:border-violet-500"
                    : "bg-gray-100 border-gray-300 text-black focus:border-violet-500"
                }
              `}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Message
            </label>

            <textarea
              name='message'
              placeholder="Your message here..."
              rows="5"
              className={`
                py-3 px-4 rounded-xl border
                outline-none resize-none transition-all duration-300

                ${
                  darkMode
                    ? "bg-black border-gray-700 text-white focus:border-violet-500"
                    : "bg-gray-100 border-gray-300 text-black focus:border-violet-500"
                }
              `}
            />
          </div>
          <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

          {/* Button */}
          <button
          type="submit"
          disabled={state.submitting}
            className="
              mt-3 py-3 rounded-xl
              border border-violet-500
              bg-violet-600
              hover:bg-violet-700
              duration-300 font-semibold
              text-white
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ideas;
