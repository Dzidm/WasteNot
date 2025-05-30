import React, { useState } from "react";

const Settings = ({ onBack }) => {
  const [formData, setFormData] = useState({
    username: "Sesie Tamakloe",
    email: "seskloe@example.com",
    password: "",
    notifications: true,
    theme: "Light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Settings saved:", formData);
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center gap-2 text-yellow-600 mb-6">
        <span>&larr;</span> Back to Dashboard
      </button>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-yellow-700 mb-2">Settings</h1>
      <p className="text-yellow-800 mb-6">Manage your account details and preferences.</p>

      {/* Form */}
      <form onSubmit={handleSave} className="bg-white shadow-md rounded-lg p-6 border border-yellow-300 space-y-4">
        {/* Username */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
            placeholder="Enter new password"
          />
          <small className="text-gray-600">Leave blank to keep your current password.</small>
        </div>

        {/* Notifications */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
            className="h-5 w-5 text-yellow-600 focus:ring-yellow-500 border-yellow-300"
          />
          <label className="font-bold text-yellow-700">Enable Notifications</label>
        </div>

        {/* Theme */}
        <div>
          <label className="block font-bold text-yellow-700 mb-1">Theme</label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            className="w-full border border-yellow-300 p-2 rounded-md focus:ring-yellow-500"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white font-bold p-3 rounded-md hover:bg-yellow-500"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
