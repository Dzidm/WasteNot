import React, { useState } from "react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const resources = [
    {
      id: 1,
      title: "Composting 101",
      category: "Guides",
      description: "Learn the basics of starting your compost at home.",
      link: "#",
    },
    {
      id: 2,
      title: "Food Donation Best Practices",
      category: "Guides",
      description: "How to donate food safely and effectively.",
      link: "#",
    },
    {
      id: 3,
      title: "Impact Calculator",
      category: "Tools",
      description: "Estimate the environmental impact of reducing food waste.",
      link: "#",
    },
    {
      id: 4,
      title: "Success Story: Local Restaurant",
      category: "Community Stories",
      description: "How one restaurant turned waste into resources.",
      link: "#",
    },
    {
      id: 5,
      title: "The Science Behind Food Waste",
      category: "Articles",
      description: "An in-depth look at food waste’s global impact.",
      link: "#",
    },
  ];

  const categories = ["All", ...new Set(resources.map((res) => res.category))];

  const filteredResources = resources.filter(
    (resource) =>
      (selectedCategory === "All" || resource.category === selectedCategory) &&
      resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-6 text-yellow-800">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-6">
        <h1 className="text-4xl font-bold mb-4 text-yellow-700">Resources</h1>
        <p className="text-gray-600">
          Explore guides, tools, and stories to help you reduce food waste and
          make a sustainable impact.
        </p>
      </header>

      {/* Search and Filter */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow p-3 border border-yellow-400 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
            aria-label="Search resources"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 border border-yellow-400 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
            aria-label="Filter by category"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            onClick={clearSearch}
            className="p-3 bg-yellow-500 text-yellow-900 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
            aria-label="Clear search and filters"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Resource Cards */}
      <main className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring focus:ring-yellow-300"
              aria-labelledby={`resource-title-${resource.id}`}
            >
              <h3
                id={`resource-title-${resource.id}`}
                className="text-xl font-bold mb-2 text-yellow-700"
              >
                {resource.title}
              </h3>
              <p className="text-sm text-yellow-600 mb-4">
                {resource.category}
              </p>
              <p className="text-gray-900">{resource.description}</p>
            </a>
          ))
        ) : (
          <p className="col-span-full text-center text-yellow-600">
            No resources found for your search.
          </p>
        )}
      </main>
    </div>
  );
};

export default Resources;
