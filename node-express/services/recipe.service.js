const Recipe = require("../models/recipe.schema");

class RecipeService {
  getRecipe = async (id) => {
    return await Recipe.findByPk(id);
  };

  getAllRecipe = async () => {
    return await Recipe.findAll();
  };

  createRecipe = async (recipeBody) => {
    return await Recipe.create(recipeBody);
  };

  updateRecipe = async (id, recipeBody) => {
    const [updatedRows] = await Recipe.update(recipeBody, {
      where: {
        id,
      },
    });

    if (updatedRows === 0) {
      throw new Error("Recipe not found");
    }

    return updatedRows;
  };

  deleteRecipe = async (id) => {
    const deletedRows = await Recipe.destroy({
      where: { id },
    });

    if (deletedRows === 0) {
      throw new Error("Recipe not found");
    }

    return deletedRows;
  };
}

module.exports = RecipeService;
