import React, { useState } from "react";
import { FaSearch, FaFilter, FaArrowLeft } from "react-icons/fa";
import data from "../../data/products.json"; // Import your JSON file

const DonorListings = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  // Extract the listings from the JSON file
  const listings = data.donors;

  const filteredListings = listings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "" || listing.donorType === filter)
  );

  return (
    <div className="p-6 min-h-screen bg-yellow-100">
      {/* Back Button */}
      {/* <button onClick={onBack} className="flex items-center gap-2 text-yellow-600 mb-6">
        <FaArrowLeft /> Back to Dashboard
      </button> */}

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-yellow-700 mb-4">Donor Listings</h1>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search listings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Filter */}
        <div className="relative w-full max-w-sm">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none pl-4 pr-10 py-2 rounded-md border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">All</option>
            <option value="Food Donor">Food Donor</option>
            <option value="Waste Donor">Waste Donor</option>
          </select>
          <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 pointer-events-none" />
        </div>
      </div>

      {/* Listings */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-yellow-300"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-yellow-700">{listing.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{listing.description}</p>
              <p className="text-sm text-gray-500 italic">{listing.location}</p>
              <p className="text-sm text-gray-500 italic">{listing.contactPhone}</p>
              <span className="inline-block mt-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                {listing.donorType}
              </span>
              <span className="ml-2 inline-block mt-2 bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                {listing.donorCategory}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* No Listings Found */}
      {filteredListings.length === 0 && (
        <p className="text-gray-500 italic mt-4">
          No listings found. Try adjusting your search or filter.
        </p>
      )}
    </div>
  );
};

export default DonorListings;
