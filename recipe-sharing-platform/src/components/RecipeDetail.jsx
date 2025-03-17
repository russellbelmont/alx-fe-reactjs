import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeDetail = data.find((item) => item.id === parseInt(id));
    setRecipe(recipeDetail);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={recipe.image} alt={recipe.title} className="w-full h-80 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-6">{recipe.title}</h1>
      <p className="text-lg text-gray-600 mt-4">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc pl-6">
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        {/* Add other ingredients */}
      </ul>
      <h2 className="text-2xl font-semibold mt-6">Cooking Instructions</h2>
      <p className="text-lg">{/* Add cooking steps */}</p>
    </div>
  );
};

export default RecipeDetail;
