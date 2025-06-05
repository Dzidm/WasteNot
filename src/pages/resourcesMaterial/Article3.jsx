import React from "react";

const Article3 = () => {
  return (
    <div className="p-6 bg-yellow-50 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">
        Impact Calculator
      </h1>
      <p className="text-lg mb-4">
        Reducing food waste isn’t just about saving money—it’s about saving the planet. Food waste contributes significantly to environmental issues, including greenhouse gas emissions and resource depletion. Our Impact Calculator helps you estimate how much of a difference you can make by reducing food waste in your daily life.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Use an Impact Calculator?</h2>
      <ul className="list-disc ml-6">
        <li><strong>Quantify Your Actions:</strong> Understand the tangible effects of your efforts.</li>
        <li><strong>Set Goals:</strong> Measure progress toward sustainable living.</li>
        <li><strong>Spread Awareness:</strong> Share your impact to inspire others.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How Does It Work?</h2>
      <p>The calculator estimates environmental impact based on:</p>
      <ul className="list-disc ml-6">
        <li>The type and quantity of food you save from waste.</li>
        <li>Estimated greenhouse gas emissions reductions.</li>
        <li>Water and energy savings from reduced food production.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Metrics</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">1. Carbon Footprint Reduction</h3>
      <p>Every kilogram of food waste saved prevents approximately 2.5 kg of CO₂ emissions.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Water Conservation</h3>
      <p>Producing food requires immense water resources. Reducing waste conserves this precious resource.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Land Use Efficiency</h3>
      <p>Less food waste means less agricultural land needed, protecting ecosystems and biodiversity.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Take Action</h2>
      <p>
        Start tracking your food waste today and see the difference you can make. Use the Impact Calculator as a tool for personal growth and environmental stewardship.
      </p>

      <p className="text-lg mt-4">
        <a href="#" className="text-yellow-500 underline">
          Try the Impact Calculator Now
        </a>
      </p>
    </div>
  );
};

export default Article3;
