import React from "react";
import { FaUserCircle, FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-red-400 to-yellow-400">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-4">
          Welcome to Vibe Chat
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Connect, Share, and Chat in Style
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username or Email
            </label>
            <div className="flex items-center border-b-2 border-pink-400 py-2">
              <FaUserCircle className="text-pink-500 text-xl mr-3" />
              <input
                type="text"
                placeholder="Enter your username"
                className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="flex items-center border-b-2 border-pink-400 py-2">
              <FaLock className="text-pink-500 text-xl mr-3" />
              <input
                type="password"
                placeholder="Enter your password"
                className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm text-pink-500 hover:text-pink-600 underline mr-4"
          >
            Forgot Password?
          </a>
          <a
            href="#"
            className="text-sm text-pink-500 hover:text-pink-600 underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
