import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';
import AddRecipeForm from './AddRecipeForm';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  // Function to add a new recipe
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]); // Update state with new recipe
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Recipe Sharing Platform</h1>
        {/* ✅ Navigation Button to Add Recipe Page */}
        <Link 
          to="/add-recipe" 
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Add New Recipe
        </Link>
      </div>

      {/* ✅ Add Recipe Form */}
      <AddRecipeForm onAddRecipe={handleAddRecipe} />

      {/* ✅ Recipe List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
              <p className="text-sm text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;



