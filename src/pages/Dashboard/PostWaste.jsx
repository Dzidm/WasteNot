import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const PostWaste = ({ onBack }) => {
  const [formData, setFormData] = useState({
    donorType: "Waste Donor", // Default to Waste Donor
    foodDonorType: "", // Individual or Organization for Food Donor
    organizationName: "",
    wasteType: "",
    otherWasteType: "",
    foodType: "",
    otherFoodType: "",
    foodDetails: "",
    quantity: "",
    description: "",
    location: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    quality: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset fields based on donor type changes
    if (name === "donorType") {
      setFormData((prevState) => ({
        ...prevState,
        foodDonorType: "",
        organizationName: "",
        wasteType: "",
        otherWasteType: "",
        foodType: "",
        otherFoodType: "",
        foodDetails: "",
        quality: "",
      }));
    }
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Details submitted successfully!");
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center gap-2 text-yellow-600 mb-6">
        <FaArrowLeft /> Back to Dashboard
      </button>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-yellow-700 mb-2">Post Waste</h1>
      <p className="text-yellow-800 mb-6">
        Fill in the details below to post your donation. This helps us match it to the right recipient.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 border border-yellow-300 space-y-4">
        {/* Caution Text */}
        {formData.donorType === "Food Donor" && (
          <p className="text-red-600 font-bold">
            Caution: All food donations must be fresh and in excellent condition. Recipients retain the right to decline any items that fail to meet these criteria.
          </p>
        )}

        {/* Donor Type */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Donor Type</label>
          <select
            name="donorType"
            value={formData.donorType}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            required
          >
            <option value="Waste Donor">Waste Donor</option>
            <option value="Food Donor">Food Donor</option>
          </select>
        </div>

        {/* Food Donor Fields */}
        {formData.donorType === "Food Donor" && (
          <>
            <div>
              <label className="block font-bold text-yellow-700 mb-1">
                Are you an Individual or an Organization?
              </label>
              <select
                name="foodDonorType"
                value={formData.foodDonorType}
                onChange={handleChange}
                className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
                required
              >
                <option value="">Select Type</option>
                <option value="Individual">Individual</option>
                <option value="Organization">Organization</option>
              </select>
            </div>
            {formData.foodDonorType === "Organization" && (
              <div>
                <label className="block font-bold text-yellow-700 mb-1">Organization Name</label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
                  placeholder="Enter organization name"
                  required
                />
              </div>
            )}
            <div>
              <label className="block font-bold text-yellow-700 mb-1">Food Type</label>
              <select
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
                required
              >
                <option value="">Select Food Type</option>
                <option value="Liquid">Liquid</option>
                <option value="Solid">Solid</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {formData.foodType === "Others" && (
              <div>
                <label className="block font-bold text-yellow-700 mb-1">Specify Other Food Type</label>
                <input
                  type="text"
                  name="otherFoodType"
                  value={formData.otherFoodType}
                  onChange={handleChange}
                  className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
                  placeholder="Specify the type"
                  required
                />
              </div>
            )}
            {(formData.foodType === "Liquid" || formData.foodType === "Solid") && (
              <div>
                <label className="block font-bold text-yellow-700 mb-1">Provide More Details</label>
                <input
                  type="text"
                  name="foodDetails"
                  value={formData.foodDetails}
                  onChange={handleChange}
                  className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
                  placeholder="E.g., Beverage, Rice, etc."
                  required
                />
              </div>
            )}
          </>
        )}

        {/* Waste Donor Fields */}
        {formData.donorType === "Waste Donor" && (
          <>
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
                <option value="Egg Shells">Egg Shells</option>
                <option value="Meat Bones">Meat Bones</option>
                <option value="Vegetable / Fruit Waste">Vegetable / Fruit Waste</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {formData.wasteType === "Others" && (
              <div>
                <label className="block font-bold text-yellow-700 mb-1">Specify Other Waste Type</label>
                <input
                  type="text"
                  name="otherWasteType"
                  value={formData.otherWasteType}
                  onChange={handleChange}
                  className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
                  placeholder="Specify the type"
                  required
                />
              </div>
            )}
            <div>
              <label className="block font-bold text-yellow-700 mb-1">Quality</label>
              <select
                name="quality"
                value={formData.quality}
                onChange={handleChange}
                className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
                required
              >
                <option value="">Select Quality</option>
                <option value="Fresh">Fresh</option>
                <option value="Old">Old</option>
                <option value="Nearly Spoilt">Nearly Spoilt</option>
                <option value="Spoilt">Spoilt</option>
              </select>
            </div>
          </>
        )}

        {/* Common Fields */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Contact Name</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Contact Phone</label>
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            placeholder="Enter the location"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Upload an Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageUpload}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Post Donation
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostWaste;
