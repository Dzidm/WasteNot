import React from "react";
import { FaHandHoldingHeart, FaUserPlus, FaSignInAlt, FaRecycle, FaMedal } from "react-icons/fa";
import { Link } from "react-router-dom";

const GeneralDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-100">
      {/* Header */}
      <header className="bg-brown-700 text-yellow-100 p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to WasteNot</h1>
        <p className="text-lg mt-2">
          Transform waste into value. Donate what you don’t need, receive what you do.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Welcome Section */}
        <section className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brown-700">How WasteNot Works</h2>
          <p className="text-lg mt-2 text-brown-600">
            It’s simple and impactful. Here’s how you can make a difference.
          </p>
        </section>

        {/* Steps Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/signUp" className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaHandHoldingHeart className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-brown-700">1. Donate</h3>
            <p className="text-brown-600">
              Share surplus items or waste for reuse, recycling, or composting.
            </p>
          </Link>
          <Link to="/signUp" className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaRecycle className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-brown-700">2. Match</h3>
            <p className="text-brown-600">
              Find matches who can use what you donate or provide what you need.
            </p>
          </Link>
          <Link to="/signUp" className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaMedal className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-brown-700">3. Earn Rewards</h3>
            <p className="text-brown-600">
              Get rewarded for contributing to a sustainable future.
            </p>
          </Link>
        </section>

        {/* Call-to-Action */}
        <section className="text-center mb-8">
          <p className="text-lg font-semibold text-brown-600">
            Ready to join the movement? Log in or sign up to access your personal dashboard.
          </p>
          <div className="mt-6 space-x-4">
            <Link to="/signUp">
              <button className="bg-yellow-400 text-brown-700 px-6 py-3 rounded-full shadow-md font-bold cursor-pointer">
                <FaSignInAlt className="inline mr-2" /> Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-white text-yellow-800 px-6 py-3 rounded-full shadow-md font-bold cursor-pointer">
                <FaUserPlus className="inline mr-2" /> Sign Up
              </button>
            </Link>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-brown-700 mb-4">Our Impact So Far</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-brown-700">
              <p className="text-3xl font-bold">500+</p>
              <p>Items Donated</p>
            </div>
            <div className="text-brown-700">
              <p className="text-3xl font-bold">1,200kg</p>
              <p>Waste Recycled</p>
            </div>
            <div className="text-brown-700">
              <p className="text-3xl font-bold">300</p>
              <p>Happy Matches</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brown-700 text-yellow-100 p-4 text-center">
        <p>© 2025 WasteNot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneralDashboard;
