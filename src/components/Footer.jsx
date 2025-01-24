import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-black py-6"
      style={{
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgb(99, 157, 243), rgba(72, 187, 97, 0.05))',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div>
            <h3 className="text-6x1 font-extrabold mb-4">About Us</h3>
            <p className="text-gray-900">
              LocalDial is your one-stop shop for all your needs. Explore a wide range of categories and products tailored for you.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-6x1 font-extrabold mb-4">Quick Links</h3>
            <ul className="text-gray-900">
              <li className="mb-2 hover:underline">
                <a href="/about">About</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-6x1 font-extrabold mb-4">Contact Us</h3>
            <p className="text-gray-800">Email: support@localdial.com</p>
            <p className="text-gray-800">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-800">Address: 123 Main Street, City, Country</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-300 pt-4 text-center">
          <p className="text-gray-800 text-sm">
            © {new Date().getFullYear()} LocalDial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

