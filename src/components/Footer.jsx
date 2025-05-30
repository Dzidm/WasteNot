import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-yellow-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About WasteNot</h3>
          <p className="text-sm leading-relaxed">
            WasteNot helps you reduce food waste by connecting you with local resources and tracking your progress for a greener planet.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/userDashboard" className="hover:text-orange-400 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-orange-400 transition">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Get the latest updates and tips directly to your inbox.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-md focus:outline-none text-brown-800"
            />
            <button
              type="submit"
              className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600 transition text-white font-semibold"
            >
              <FaEnvelope />
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-yellow-300">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-orange-400 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-orange-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-orange-400 transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-yellow-300">
        &copy; {new Date().getFullYear()} WasteNot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
