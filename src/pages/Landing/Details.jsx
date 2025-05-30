import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaHandsHelping, FaLightbulb } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf size={40} className="text-yellow-600" />,
    title: "Eco-Friendly Solutions",
    description:
      "Our practices ensure minimal environmental impact by promoting sustainability and green initiatives.",
  },
  {
    icon: <FaRecycle size={40} className="text-yellow-700" />,
    title: "Waste Reduction",
    description:
      "Innovative strategies to reduce food waste at every stage from production to consumption.",
  },
  {
    icon: <FaHandsHelping size={40} className="text-yellow-800" />,
    title: "Community Engagement",
    description:
      "Partnering with local communities to raise awareness and encourage responsible waste management.",
  },
  {
    icon: <FaLightbulb size={40} className="text-yellow-900" />,
    title: "Smart Tools",
    description:
      "Utilize our cutting-edge calculators and guides to measure and improve your environmental impact.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <header className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-yellow-700">
          Why Choose Us
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-yellow-900">
          Discover the key features and highlights that make our approach to food
          waste reduction innovative and impactful.
        </p>
      </header>

      <motion.div
        className="max-w-5xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map(({ icon, title, description }, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-yellow-800">{title}</h3>
            <p className="text-gray-700 max-w-xs">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesDetailPage;
