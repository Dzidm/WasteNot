import React from "react";
import { Link } from "react-router";
import { FaBell, FaUserCircle, FaChartBar, FaPlusCircle, FaTrophy, FaCog, FaSignOutAlt } from "react-icons/fa";

const Dashboard = ({ donorName }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-yellow-100 text-yellow-700 flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-yellow-500">WasteNot</div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-4 flex items-center gap-3 hover:bg-yellow-500 p-2 rounded-md">
              <Link to="/dashboard" className="flex items-center gap-3">
                <FaChartBar /> Dashboard
              </Link>
            </li>
            <li className="mb-4 flex items-center gap-3 hover:bg-yellow-500 p-2 rounded-md">
              <Link to="/postWaste" className="flex items-center gap-3">
                <FaPlusCircle /> Post Waste
              </Link>
            </li>
            <li className="mb-4 flex items-center gap-3 hover:bg-yellow-500 p-2 rounded-md">
              <Link to="/challenges" className="flex items-center gap-3">
                <FaTrophy /> Challenges
              </Link>
            </li>
            <li className="mb-4 flex items-center gap-3 hover:bg-yellow-500 p-2 rounded-md">
              <Link to="/settings" className="flex items-center gap-3">
                <FaCog /> Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-yellow-500">
          <button className="flex items-center gap-3 hover:bg-yellow-500 p-2 rounded-md w-full">
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </aside>


      {/* Main Content */}
      <main className="w-3/4 bg-white">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-yellow-100 shadow-md">
          <h1 className="text-xl font-bold text-yellow-700">Dashboard</h1>
          <div className="flex items-center gap-4">
            <FaBell className="text-yellow-600 text-xl cursor-pointer" />
            <FaUserCircle className="text-yellow-600 text-2xl cursor-pointer" />
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Welcome Message */}
          <div className="bg-yellow-50 shadow-md rounded-lg p-4 border border-yellow-300 mb-6">
            <h2 className="text-2xl font-bold text-yellow-700">Welcome, {donorName}!</h2>
            <p className="text-yellow-800">
              Thank you for joining WasteNot. Together, we can make a difference!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-yellow-50 shadow-md rounded-lg p-4 border border-yellow-300">
              <h2 className="text-lg font-bold text-yellow-700">Saved CO2</h2>
              <p className="text-2xl font-semibold text-yellow-600">120 kg</p>
            </div>
            <div className="bg-yellow-50 shadow-md rounded-lg p-4 border border-yellow-300">
              <h2 className="text-lg font-bold text-yellow-700">Waste Diverted</h2>
              <p className="text-2xl font-semibold text-yellow-600">50 kg</p>
            </div>
            <div className="bg-yellow-50 shadow-md rounded-lg p-4 border border-yellow-300">
              <h2 className="text-lg font-bold text-yellow-700">Badges Earned</h2>
              <p className="text-2xl font-semibold text-yellow-600">7</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-yellow-50 shadow-md rounded-lg p-4 mb-6 border border-yellow-300">
            <h2 className="text-lg font-bold text-yellow-700 mb-4">Recent Activity</h2>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-yellow-800">Donated 5kg of food waste</span>
                <span className="text-sm text-yellow-600">2 hours ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-yellow-800">Earned "First Donation" badge</span>
                <span className="text-sm text-yellow-600">1 day ago</span>
              </li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-yellow-50 shadow-md rounded-lg p-4 border border-yellow-300">
            <h2 className="text-lg font-bold text-yellow-700 mb-4">Challenges</h2>
            <p className="text-yellow-800">Complete 10kg waste donation by Sunday to earn the "Sustainability Hero" badge!</p>
            <div className="bg-yellow-200 h-4 rounded-full mt-2">
              <div className="bg-yellow-600 h-full w-2/3 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
