import React from "react";
import { motion } from "framer-motion";
import woman from "../../assets/image/woman.png"; // Adjust path as necessary

const testimonials = [
  {
    id: 1,
    quote:
      "WasteNot has completely transformed how our restaurant handles food waste. We’ve saved so much and helped local farmers too!",
    name: "Afia Mintah",
    designation: "Restaurant Owner",
    image: woman, // Using woman.png here
  },
  {
    id: 2,
    quote:
      "Thanks to WasteNot, I’ve connected with local stores that provide surplus food for my garden composting needs.",
    name: "Prince Tagoe",
    designation: "Gardener",
    image: woman,
  },
  {
    id: 3,
    quote:
      "This platform is a game-changer. It’s inspiring to see communities working together for sustainability.",
    name: "Amina Alhassan",
    designation: "Community Volunteer",
    image: woman,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-yellow-100 py-12 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-800">
          What People Say About Us
        </h2>
        <p className="text-md md:text-lg text-yellow-600 mt-4">
          See how WasteNot is making a difference in the community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-yellow-400"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-yellow-700">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-yellow-500">
                  {testimonial.designation}
                </p>
              </div>
            </div>
            <p className="text-yellow-700 text-sm md:text-base">
              &quot;{testimonial.quote}&quot;
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
