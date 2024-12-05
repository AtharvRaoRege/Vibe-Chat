import React from 'react';

const Register = () => {
  return (
    <>
      <form>
        {/* <!-- Full Name --> */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            placeholder="Enter your full name" 
            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        {/* <!-- Email --> */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        {/* <!-- Password --> */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        {/* <!-- Submit Button --> */}
        <input 
          type="submit" 
          value="Register"
          className="w-full bg-blue-600 text-white font-medium p-3 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
        />
      </form>
      <p className="text-gray-600 text-center mt-4">
        Already have an account? 
        <a href="/login" className="text-blue-600 hover:underline">Login</a>
      </p>
    </>
  );
}

export default Register;
