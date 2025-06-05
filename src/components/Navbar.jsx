import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-yellow-100 text-yellow-700 px-6 py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold cursor-pointer">
        <Link to="/">WasteNot</Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 font-semibold">
        <li className="hover:text-orange-500 cursor-pointer transition">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition">
          <Link to="/userDashboard">Dashboard</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition">
          <Link to="/listings">Donations</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-yellow-200 text-brown-800 flex flex-col items-center space-y-4 py-6 font-semibold md:hidden shadow-lg">
          <li className="hover:text-orange-500 cursor-pointer transition" onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition" onClick={toggleMenu}>
            <Link to="/userDashboard">Dashboard</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition" onClick={toggleMenu}>
            <Link to="/resources">Resources</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition" onClick={toggleMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
