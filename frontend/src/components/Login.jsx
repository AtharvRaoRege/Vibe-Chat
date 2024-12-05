import React from "react";
import { FaUserCircle, FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-sm w-full transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400 text-center mb-4">
          Vibe Chat
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Join the conversation. Stay connected.
        </p>
        <form>
          <div className="mb-5">
            <div className="flex items-center border-b-2 border-indigo-400 py-2">
              <FaUserCircle className="text-indigo-500 text-2xl mr-3" />
              <input
                type="text"
                placeholder="Username or Email"
                className="appearance-none bg-transparent border-none w-full text-gray-700 placeholder-gray-500 py-1 px-2 leading-tight focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center border-b-2 border-indigo-400 py-2">
              <FaLock className="text-indigo-500 text-2xl mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="appearance-none bg-transparent border-none w-full text-gray-700 placeholder-gray-500 py-1 px-2 leading-tight focus:outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-300"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm text-indigo-500 hover:text-indigo-600 underline mr-4"
          >
            Forgot Password?
          </a>
          <a
            href="#"
            className="text-sm text-indigo-500 hover:text-indigo-600 underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
