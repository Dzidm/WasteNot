import React from "react";

const Article1 = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-3xl mx-auto bg-yellow-50 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl text-yellow-700  font-bold mb-4">Composting 101: A Beginner's Guide to Sustainable Living</h1>
        <p className="mb-4">
          Composting is one of the simplest and most effective ways to reduce waste and contribute to a healthier planet.
          Whether you're a seasoned gardener or a beginner, starting a compost at home is easier than you might think.
          This guide will walk you through the basics of composting and provide tips to make the process successful.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">What is Composting?</h2>
        <p className="mb-4">
          Composting is the natural process of recycling organic matter, such as food scraps and yard waste, into a valuable
          fertilizer that can enrich soil and plants. This process occurs through the decomposition of organic materials,
          creating a nutrient-rich substance known as compost.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Benefits of Composting</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Reduces Waste:</strong> Composting significantly reduces the amount of organic waste sent to landfills, decreasing methane emissions.</li>
          <li><strong>Improves Soil Health:</strong> Compost enhances soil structure, retains moisture, and adds essential nutrients for plant growth.</li>
          <li><strong>Promotes Sustainability:</strong> By composting, you contribute to a circular economy, where resources are reused instead of discarded.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Getting Started</h2>
        <p className="mb-4">Here are the essential steps to start composting at home:</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Choose a Composting Method:</strong> 
            <ul className="list-disc pl-6">
              <li><strong>Backyard Composting:</strong> Ideal for those with outdoor space. Use a compost bin or a simple pile.</li>
              <li><strong>Indoor Composting:</strong> Suitable for small spaces. Utilize a compost bucket or a vermicomposting bin with worms.</li>
            </ul>
          </li>
          <li>
            <strong>Select a Location:</strong> Choose a spot with good drainage and access to sunlight for outdoor composting. For indoor composting, ensure proper ventilation and a secure lid to avoid odors.
          </li>
          <li>
            <strong>Know What to Compost:</strong> Green materials include fruit and vegetable scraps, coffee grounds, and tea bags. Brown materials include dry leaves, shredded paper, and cardboard. Avoid meat, dairy, oily foods, and pet waste.
          </li>
          <li>
            <strong>Maintain Your Compost:</strong> Aerate your compost regularly, balance greens and browns, and monitor moisture levels.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Using Your Compost</h2>
        <p className="mb-4">
          Once your compost is dark, crumbly, and earthy-smelling, it\u2019s ready to use! Spread it in your garden beds, mix it into potting soil, or use it as a top dressing for lawns and plants.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
        <p>
          Composting is a simple yet powerful way to make a positive impact on the environment. By turning organic waste
          into nutrient-rich compost, you can reduce waste, enrich your soil, and promote sustainable living. Start your
          composting journey today and take a step towards a greener future.
        </p>
      </div>
    </div>
  );
};

export default Article1;
