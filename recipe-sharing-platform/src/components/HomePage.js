import React, { useState, useEffect } from 'react';
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data); // Load the data on mount
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
          <p className="text-sm text-gray-600">{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
