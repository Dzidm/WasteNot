import React, { useState } from "react";

const Signup = () => {
  const [formType, setFormType] = useState("signup");
  const [donorType, setDonorType] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 p-8 sm:p-4">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-3xl sm:w-11/12">
        {/* Form Heading */}
        <h2 className="text-3xl font-extrabold text-brown-700 text-center mb-6">
          Want to Be a Donor?
        </h2>
        <p className="text-lg text-brown-600 text-center mb-8">
          Join us to make a difference! Sign up or log in to start donating.
        </p>

        {/* Toggle Between Login and Signup */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setFormType("signup")}
            className={`px-6 py-3 sm:px-4 sm:py-2 rounded-lg text-lg font-bold transition ${
              formType === "signup"
                ? "bg-yellow-400 text-brown-700"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setFormType("login")}
            className={`px-6 py-3 sm:px-4 sm:py-2 rounded-lg text-lg font-bold transition ${
              formType === "login"
                ? "bg-yellow-400 text-brown-700"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            Log In
          </button>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {formType === "signup" && (
            <>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-lg text-brown-700 font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-lg text-brown-700 font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Choose a username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="donorType"
                  className="block text-lg text-brown-700 font-bold mb-2"
                >
                  What type of donor are you?
                </label>
                <select
                  id="donorType"
                  value={donorType}
                  onChange={(e) => setDonorType(e.target.value)}
                  className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  <option value="">Select an option</option>
                  <option value="waste">Waste Donor</option>
                  <option value="food">Food/Items Donor</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg text-brown-700 font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-lg text-brown-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Create a password"
                  required
                />
              </div>
            </>
          )}
          {formType === "login" && (
            <>
              <div>
                <label
                  htmlFor="username"
                  className="block text-lg text-brown-700 font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-lg text-brown-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-400 text-brown-700 py-3 px-6 rounded-lg text-lg font-bold hover:bg-yellow-500 transition"
          >
            {formType === "signup" ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center text-brown-600 mt-6">
          {formType === "signup" ? (
            <>
              Already have an account?{" "}
              <button
                className="text-yellow-500 font-bold hover:underline"
                onClick={() => setFormType("login")}
              >
                Log In
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                className="text-yellow-500 font-bold hover:underline"
                onClick={() => setFormType("signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Signup;
