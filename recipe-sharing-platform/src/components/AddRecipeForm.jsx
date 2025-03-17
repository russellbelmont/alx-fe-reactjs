import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!title || !ingredients || !instructions) {
      setError('All fields are required!');
      return;
    }

    // Create a new recipe object
    const newRecipe = {
      id: Date.now(), // Unique ID for now
      title,
      ingredients: ingredients.split(',').map((item) => item.trim()), // Convert comma-separated ingredients into an array
      instructions,
      image: 'https://via.placeholder.com/150', // Placeholder image
    };

    onAddRecipe(newRecipe); // Pass new recipe to parent component

    // Clear form
    setTitle('');
    setIngredients('');
    setInstructions('');
    setError('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block font-medium">Recipe Title:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block font-medium">Ingredients (comma-separated):</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients separated by commas"
          />
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block font-medium">Instructions:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter cooking instructions"
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
