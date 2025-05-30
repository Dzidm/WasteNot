import React from "react";
import { FaHandsHelping, FaSeedling, FaRecycle } from "react-icons/fa";

const Highlights = () => {
  return (
    <section className="bg-yellow-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-gray-800">
        {/* Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-600">
            Transforming Waste into Opportunity
          </h2>
          <p className="text-gray-600 text-lg">
            Connecting waste sources with those who can reuse, repurpose, and benefit.
          </p>
        </header>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-yellow-600 w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Donate Food to Those in Need
            </h3>
            <p className="text-gray-600">
              Partner with local charities and shelters to give surplus food a
              second life, helping reduce hunger in your community.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <FaSeedling className="text-yellow-600 w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Feed Soil, Not Landfills</h3>
            <p className="text-gray-600">
              Connect with farmers and gardeners to donate food scraps and
              organic waste, turning it into nutrient-rich compost.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <FaRecycle className="text-yellow-600 w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Build a Sustainable Future
            </h3>
            <p className="text-gray-600">
              Join a community focused on reducing waste and promoting a
              circular economy, transforming waste into resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
