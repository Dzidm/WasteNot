import React, { useState } from "react";
import waste from "../../assets/image/waste.png";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-yellow-100 text-brown-800">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={waste}
          alt="Waste Management"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        {submitted ? (
          <div className="bg-white text-yellow-500 p-6 rounded-md text-center">
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p className="mt-2">Your message has been successfully sent. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white text-yellow-800 p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                placeholder="Enter the subject"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                rows="5"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
