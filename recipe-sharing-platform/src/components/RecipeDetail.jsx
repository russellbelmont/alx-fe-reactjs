import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Fetch the id from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeDetail = data.find((item) => item.id === parseInt(id)); // Find the recipe by id
    setRecipe(recipeDetail);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
      />
      <h1 className="text-3xl font-bold mt-6">{recipe.title}</h1>
      <p className="text-lg text-gray-600 mt-4">{recipe.summary}</p>

      {/* Ingredients Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold">Instructions</h2>
        <p className="text-lg">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;


