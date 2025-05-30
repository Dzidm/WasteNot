import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const PostWaste = ({ onBack }) => {
  const [formData, setFormData] = useState({
    wasteType: "",
    quantity: "",
    description: "",
    location: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Waste details submitted successfully!");
  };

  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center gap-2 text-yellow-600 mb-6">
        <FaArrowLeft /> Back to Dashboard
      </button>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-yellow-700 mb-2">Post Waste</h1>
      <p className="text-yellow-800 mb-6">
        Fill in the details below to post your waste donation. This helps us match it to the right recipient.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 border border-yellow-300 space-y-4">
        {/* Waste Type */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Waste Type</label>
          <select
            name="wasteType"
            value={formData.wasteType}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            required
          >
            <option value="">Select Waste Type</option>
            <option value="Food Waste">Food Waste</option>
            <option value="Plastic">Plastic</option>
            <option value="Metal">Metal</option>
            <option value="Glass">Glass</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Quantity (kg)</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            rows="4"
            placeholder="Provide a brief description"
            required
          ></textarea>
        </div>

        {/* Location */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            placeholder="Enter location"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Upload Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white font-bold p-3 rounded-md hover:bg-yellow-500"
        >
          Post Waste
        </button>
      </form>
    </div>
  );
};

export default PostWaste;
