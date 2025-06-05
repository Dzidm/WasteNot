import React from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaPlusCircle, FaTrophy, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="h-screen w-80 bg-yellow-100 text-yellow-700 shadow-lg flex flex-col">
      {/* Logo Section */}
      <div className="p-4 text-2xl font-bold border-b border-yellow-500">
        WasteNot
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md ${
                  isActive ? "bg-yellow-400 text-white" : "hover:bg-yellow-200"
                }`
              }
            >
              <FaChartBar /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="postWaste"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md ${
                  isActive ? "bg-yellow-400 text-white" : "hover:bg-yellow-200"
                }`
              }
            >
              <FaPlusCircle /> Post Waste / Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="challenges"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md ${
                  isActive ? "bg-yellow-400 text-white" : "hover:bg-yellow-200"
                }`
              }
            >
              <FaTrophy /> Challenges
            </NavLink>
          </li>
          <li>
            <NavLink
              to="settings"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md ${
                  isActive ? "bg-yellow-400 text-white" : "hover:bg-yellow-200"
                }`
              }
            >
              <FaCog /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-yellow-500">
        <button className="flex items-center gap-3 hover:bg-yellow-200 p-2 rounded-md w-full">
          <FaSignOutAlt /> Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
