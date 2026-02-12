const logger = require("../logger/logger");
const RecipeService = require("../services/recipe.service");
const RecipeResponse = new RecipeService();

const getAllRecipeController = async (req, res) => {
  try {
    const response = await RecipeResponse.getAllRecipe();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getRecipeController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await RecipeResponse.getRecipe(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createRecipeController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || name.length === 0) {
      return res.status(400).json({ error: "Name is required" });
    }

    const createdRecipe = await RecipeResponse.createRecipe(req.body);

    return res.status(201).json({ created: createdRecipe });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateRecipeController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateRecipe = req.body;
    if (updateRecipe.name?.length <= 0) {
      return res.status(400).json({ error: "Name is required" });
    }

    await RecipeResponse.updateRecipe(id, updateRecipe);

    return res.status(200).json({ updated: "successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteRecipeController = async (req, res) => {
  try {
    const { id } = req.params;
    const recipeFound = await RecipeResponse.getRecipe(id);
    if (!recipeFound || recipeFound === null) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    await RecipeResponse.deleteRecipe(id);
    return res.status(200).json({ deleted: "successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRecipeController,
  createRecipeController,
  updateRecipeController,
  getRecipeController,
  deleteRecipeController,
};
