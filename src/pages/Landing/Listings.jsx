import React from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/products.json"; // Adjust the path as needed

const ListingsPreview = ({ onViewAll }) => {
  // Extract the donors array from the JSON file
  const { donors } = productsData;

  // Get the first 3 donors for the preview
  const previewListings = donors.slice(0, 3);

  return (
    <div className="p-6 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">Featured Listings</h2>
      <p className="text-xl font-bold text-yellow-700 mb-5">Get to Meet our Donors and what they offer</p>

      {/* Listings Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {previewListings.map((listing) => (
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
              <h3 className="text-lg font-bold text-yellow-700">{listing.title}</h3>
              <p className="text-sm text-gray-500 italic">{listing.location}</p>
              <span className="inline-block mt-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                {listing.donorType}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center">
        <Link
          to="/listings"
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600"
        >
          View All Listings
        </Link>
      </div>
    </div>
  );
};

export default ListingsPreview;
