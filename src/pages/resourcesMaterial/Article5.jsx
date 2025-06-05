import React from "react";

const Article5 = () => {
  return (
    <div className="p-6 max-w-4xl bg-yellow-50 mx-auto">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">
        The Science Behind Food Waste
      </h1>
      <p className="text-lg mb-4">
        Food waste is not just a matter of wastefulness—it's a significant global challenge with far-reaching environmental, economic, and social implications. This article explores the science behind food waste, its impact, and potential solutions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Understanding Food Waste</h2>
      <p>
        Food waste occurs at various stages of the supply chain: production, processing, distribution, retail, and consumption. Scientists categorize food waste into two main types:
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Edible Food Waste:</strong> Food that could have been consumed but was discarded.</li>
        <li><strong>Inedible Food Waste:</strong> Parts of food like peels and bones that are not typically eaten.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Global Impact</h2>
      <p>
        Food waste has a profound impact on the environment, the economy, and society:
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Environmental:</strong> Food waste contributes to greenhouse gas emissions when it decomposes in landfills. It's estimated that 8-10% of global emissions come from food waste.</li>
        <li><strong>Economic:</strong> The global cost of food waste is estimated at $1 trillion annually.</li>
        <li><strong>Social:</strong> Despite the waste, millions of people worldwide suffer from food insecurity.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">The Science of Decomposition</h2>
      <p>
        When food waste ends up in landfills, it undergoes anaerobic decomposition, producing methane, a potent greenhouse gas. Composting, on the other hand, promotes aerobic decomposition, reducing methane emissions and creating nutrient-rich soil.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Innovative Solutions</h2>
      <p>
        Scientists and innovators are exploring ways to minimize food waste, including:
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Food Preservation Technology:</strong> Advanced packaging to extend shelf life.</li>
        <li><strong>Food Waste Recycling:</strong> Converting food waste into bioenergy or animal feed.</li>
        <li><strong>Artificial Intelligence:</strong> Using AI to predict and manage inventory more effectively.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">What You Can Do</h2>
      <p>
        Everyone can contribute to reducing food waste:
      </p>
      <ul className="list-disc ml-6">
        <li>Plan meals and shop mindfully to avoid over-purchasing.</li>
        <li>Store food properly to extend its freshness.</li>
        <li>Compost food scraps instead of throwing them away.</li>
      </ul>

      <p className="text-lg mt-4">
        <a href="#" className="text-yellow-500 underline">
          Learn More About the Science of Food Waste
        </a>
      </p>
    </div>
  );
};

export default Article5;
