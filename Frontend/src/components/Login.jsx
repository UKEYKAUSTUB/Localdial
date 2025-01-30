import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const Navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://localdial-lv6n.onrender.com", {
        email,
        password,
      });

      if (response.data.success) {
        setSuccess(response.data.message);  // Display success message
        Navigate("/homepage") 
        setError(""); // Clear any previous errors
        // Redirect or perform any additional actions here
      }
    } catch (err) {
      // Handle errors
      if (err.response) {
        setError(err.response.data.message); // Display the error message from the backend
      } else {
        setError("An error occurred. Please try again.");
      }
      setSuccess(""); // Clear any success message
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section with Image */}
      <div className="relative w-1/2 bg-black flex items-center justify-center">
        <img
          src="src/assets/images/Earthconnections.png" // Replace with your image path
          alt="Welcome"
          className="h-full object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute bottom-10 w-full text-center">
          <h2 className="text-white text-x5 font-extrabold drop-shadow-md">
            Welcome Back! <br /> Ready to Connect with Your Community?
          </h2>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-gray-600 mb-8">It’s nice to see you again.</p>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Your password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Success Message */}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
