import React from "react";

const Overview = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Card */}
      <div className="shadow-lg rounded-lg p-6 border-l-4 border-yellow-500">
        <h2 className="text-2xl font-bold text-yellow-700">Welcome, [User]!</h2>
        <p className="text-yellow-800 mt-2">
          Thank you for being part of WasteNot. Together, we can make a difference!
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 text-center border border-yellow-300">
          <h3 className="text-lg font-bold text-yellow-700">Saved CO₂</h3>
          <p className="text-2xl font-semibold text-yellow-600">120 kg</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center border border-yellow-300">
          <h3 className="text-lg font-bold text-yellow-700">Waste Diverted</h3>
          <p className="text-2xl font-semibold text-yellow-600">50 kg</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center border border-yellow-300">
          <h3 className="text-lg font-bold text-yellow-700">Badges Earned</h3>
          <p className="text-2xl font-semibold text-yellow-600">7</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-yellow-50 shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold text-yellow-700 mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span className="text-yellow-800">Donated 5kg of food waste</span>
            <span className="text-sm text-brown-500">2 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-yellow-800">Earned "First Donation" badge</span>
            <span className="text-sm text-brown-500">1 day ago</span>
          </li>
        </ul>
      </div>

      {/* Challenges */}
      <div className="bg-yellow-50 shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold text-yellow-700 mb-4">Challenges</h3>
        <p className="text-yellow-800">
          Complete 10kg waste donation by Sunday to earn the <b>"Sustainability Hero"</b> badge!
        </p>
        <div className="mt-4 bg-yellow-200 h-4 rounded-full">
          <div
            className="bg-yellow-400 h-full rounded-full"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
