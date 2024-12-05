import React from 'react'

const Register = () => {
  return (
    <>
      <form>
        {/* <!-- Full Name --> */}
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            placeholder="Enter your full name" 
            class="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        {/* <!-- Email --> */}
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            class="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        {/* <!-- Password --> */}
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-medium">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            class="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <input 
          type="submit" 
          class="w-full bg-blue-600 text-white font-medium p-3 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
        >
          Register
        </input>
      </form>
      <p class="text-gray-600 text-center mt-4">
        Already have an account? 
        <a href="/login" class="text-blue-600 hover:underline">Login</a>
      </p>
    </>
  )
}

export default Register