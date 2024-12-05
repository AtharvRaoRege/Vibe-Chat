import React from "react";
import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-4">
          Vibe Chat
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create an account to join the chat.
        </p>
        <form>
          {/* Username Field */}
          <div className="mb-5">
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaUserCircle className="text-gray-500 text-2xl mr-3" />
              <input
                type="text"
                placeholder="Username"
                className="appearance-none bg-transparent border-none w-full text-gray-700 placeholder-gray-400 py-1 px-2 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaEnvelope className="text-gray-500 text-2xl mr-3" />
              <input
                type="email"
                placeholder="Email"
                className="appearance-none bg-transparent border-none w-full text-gray-700 placeholder-gray-400 py-1 px-2 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaLock className="text-gray-500 text-2xl mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="appearance-none bg-transparent border-none w-full text-gray-700 placeholder-gray-400 py-1 px-2 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
