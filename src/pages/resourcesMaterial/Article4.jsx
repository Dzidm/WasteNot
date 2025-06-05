import React from "react";

const Article4 = () => {
  return (
    <div className="p-6 max-w-4xl bg-yellow-50 mx-auto">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">
        Success Story: Local Restaurant
      </h1>
      <p className="text-lg mb-4">
        Food waste is a significant challenge for restaurants, but some have risen to the occasion with innovative solutions. This success story showcases how one local restaurant turned waste into valuable resources while benefiting the community and the environment.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">The Challenge</h2>
      <p>
        This family-owned restaurant was facing escalating waste management costs and wanted to adopt a more sustainable model. Their primary concern was the environmental impact of sending tons of food waste to the landfill every month.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">The Solution</h2>
      <p>
        With guidance from local sustainability experts, the restaurant implemented several key practices:
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Composting:</strong> They set up a composting system to recycle food scraps into nutrient-rich soil for local farms.</li>
        <li><strong>Food Donations:</strong> Leftover food that was safe to consume was donated to shelters and food banks.</li>
        <li><strong>Smarter Purchasing:</strong> They optimized inventory to reduce overordering and spoilage.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">The Results</h2>
      <p>
        The impact of these changes was remarkable:
      </p>
      <ul className="list-disc ml-6">
        <li>A 50% reduction in monthly waste management costs.</li>
        <li>Over 1,000 meals donated to the local community annually.</li>
        <li>Positive recognition from customers, enhancing their reputation.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Lessons Learned</h2>
      <p>
        This journey taught the restaurant valuable lessons:
      </p>
      <ul className="list-disc ml-6">
        <li>Small steps can lead to big changes over time.</li>
        <li>Engaging staff and customers creates a shared sense of purpose.</li>
        <li>Community partnerships amplify impact.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Join the Movement</h2>
      <p>
        Inspired by this story? Whether you’re a restaurant owner, a diner, or an advocate, you can make a difference. Share this story and start exploring ways to reduce waste in your community today!
      </p>

      <p className="text-lg mt-4">
        <a href="#" className="text-yellow-500 underline">
          Learn More About Sustainability
        </a>
      </p>
    </div>
  );
};

export default Article4;
