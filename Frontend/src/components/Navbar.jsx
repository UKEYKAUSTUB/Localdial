import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="w-full py-4 text-white"
      style={{
        background: 'linear-gradient(to bottom, rgb(99, 157, 243), rgba(72, 187, 97, 0.05))',
      }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">LocalDial</a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
