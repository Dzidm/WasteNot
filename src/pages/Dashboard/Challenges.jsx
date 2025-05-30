import React from "react";

const Challenges = ({ onBack }) => {
  const challenges = [
    {
      title: "Donate 10kg of Food Waste",
      description: "Earn the 'Sustainability Hero' badge by donating 10kg of food waste this week.",
      progress: 70, // Percentage progress
      deadline: "Sunday, May 31, 2025",
    },
    {
      title: "Recycle 20 Plastic Bottles",
      description: "Help reduce plastic waste and earn the 'Eco-Warrior' badge.",
      progress: 40,
      deadline: "Tuesday, June 2, 2025",
    },
    {
      title: "Participate in 5 Community Cleanups",
      description: "Join cleanups and earn 500 bonus points.",
      progress: 20,
      deadline: "June 30, 2025",
    },
  ];

  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center gap-2 text-yellow-600 mb-6">
        <span>&larr;</span> Back to Dashboard
      </button>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-yellow-700 mb-2">Challenges</h1>
      <p className="text-yellow-800 mb-6">Take part in challenges to earn badges and rewards!</p>

      {/* Challenges List */}
      <div className="space-y-6">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-yellow-300"
          >
            {/* Challenge Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-yellow-700">{challenge.title}</h2>
              <span className="text-sm text-gray-500">{challenge.deadline}</span>
            </div>

            {/* Challenge Description */}
            <p className="text-yellow-800 mt-2">{challenge.description}</p>

            {/* Progress Bar */}
            <div className="bg-gray-200 h-4 rounded-full mt-4">
              <div
                className="bg-yellow-600 h-full rounded-full"
                style={{ width: `${challenge.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-yellow-100 mt-1">{challenge.progress}% Completed</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
