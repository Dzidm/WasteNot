import React from "react";
import { Link } from "react-router-dom";

const SingleListing = ({ listing }) => {
  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Back Button */}
      <Link to="/donor-listings" className="text-yellow-600 mb-6 block">
        Back to Listings
      </Link>

      {/* Listing Details */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-yellow-300">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold text-yellow-700 mb-4">{listing.title}</h1>
        <p className="text-gray-600 mb-2">{listing.description}</p>
        <p className="text-sm text-gray-500 italic mb-4">{listing.location}</p>
        <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
          {listing.donorType}
        </span>

        {/* Contact Info */}
        <div className="mt-4 border-t border-yellow-300 pt-4">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">Contact Information</h2>
          <p><strong>Name:</strong> {listing.contactName}</p>
          <p><strong>Email:</strong> {listing.contactEmail}</p>
          <p><strong>Phone:</strong> {listing.contactPhone}</p>
        </div>

        {/* Contact Button */}
        <div className="mt-6">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600">
            Request Donation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
