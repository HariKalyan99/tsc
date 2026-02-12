const RecipeService = require("../services/recipe.service");
const RecipeResponse = new RecipeService();

const getAllRecipeController = async (req, res) => {
  const response = await RecipeResponse.getAllRecipe();
  res.status(200).json(response);
};

const createRecipeController = async (req, res) => {
  const createdRecipeResponse = await RecipeResponse.createRecipe(req.body);
  res.status(201).json({ data: createdRecipeResponse });
};

module.exports = { getAllRecipeController, createRecipeController };
