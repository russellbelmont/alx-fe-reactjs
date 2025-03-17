import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation: Ensure all fields are filled
    if (!title || !ingredients || !steps) {
      setError('All fields are required!');
      return;
    }

    // ✅ Create a new recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(',').map((item) => item.trim()), // Convert comma-separated values to array
      steps,
      image: 'https://via.placeholder.com/150', // Placeholder image
    };

    onAddRecipe(newRecipe); // Pass new recipe to parent component

    // ✅ Clear form
    setTitle('');
    setIngredients('');
    setSteps('');
    setError('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block font-medium">Recipe Title:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium">Ingredients (comma-separated):</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-300"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients separated by commas"
          />
        </div>

        {/* Cooking Steps (Updated from "instructions" to "steps") */}
        <div>
          <label className="block font-medium">Steps:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-300"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter cooking steps"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
