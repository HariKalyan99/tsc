const {
  getAllRecipeController,
  createRecipeController,
} = require("../controller/recipe.controller");

const e = require("express");

const recipeRouter = e.Router();

recipeRouter.get("/all-recipes", getAllRecipeController);
recipeRouter.post("/create-recipe", createRecipeController);

module.exports = recipeRouter;
