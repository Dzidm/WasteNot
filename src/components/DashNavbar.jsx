import React from "react";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

const NavDashBar = ({ userName }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-yellow-100 shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-yellow-700">Dashboard</h1>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full bg-yellow-50 border border-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400"
        />
        <FaSearch className="absolute right-3 top-2 text-yellow-600 cursor-pointer" />
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-10">
        <div className="relative group">
          <FaBell className="text-yellow-600 text-xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            5
          </span>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-yellow-700 text-white py-1 px-2 rounded-md opacity-0 group-hover:opacity-100">
            Notifications
          </span>
        </div>

        <div className="relative group">
          <FaUserCircle className="text-yellow-600 text-2xl cursor-pointer" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-yellow-700 text-white py-1 px-2 rounded-md opacity-0 group-hover:opacity-100">
            {userName}
          </span>
        </div>
      </div>
    </header>
  );
};

export default NavDashBar;
