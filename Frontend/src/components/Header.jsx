import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <header
        className="py-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1),rgba(72, 187, 97, 0.05))',
        }}
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold text-black leading-tight">
            Explore. Connect. <br /> Simplify Your Local Search.
          </h1>
          <p className="text-lg font-medium text-gray-900 mt-2">
            Your gateway to trusted local businesses and services. <br /> Local Services at Your
            Fingertips.
          </p>
          {/* Centered Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/signup">
              <button
                className="bg-blue-500 text-white px-12 py-4 text-2xl rounded-lg hover:bg-blue-600 transition-all font-bold shadow-lg"
              >
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button
                className="bg-blue-500 text-white px-12 py-4 text-2xl rounded-lg hover:bg-blue-600 transition-all font-bold shadow-lg"
              >
                Log In
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
