const Recipe = require("../models/recipe.schema");

class RecipeService {
  getAllRecipe = async () => {
    try {
      const recipes = await Recipe.findAll();
      return recipes;
    } catch (error) {
      throw new Error("Error fetching the recipes");
    }
  };

  createRecipe = async (recipe) => {
    try {
      const createdRecipe = await Recipe.create(recipe);

      return createdRecipe;
    } catch (error) {
      throw new Error("Error creating a recipe");
    }
  };
}

module.exports = RecipeService;
