const {
  getAllRecipeController,
  createRecipeController,
  updateRecipeController,
  getRecipeController,
  deleteRecipeController,
} = require("../controller/recipe.controller");

const e = require("express");

const recipeRouter = e.Router();

recipeRouter
  .get("/all-recipes", getAllRecipeController)
  .post("/create-recipe", createRecipeController)
  .get("/:id", getRecipeController)
  .put("/update-recipe/:id", updateRecipeController)
  .delete("/delete-recipe/:id", deleteRecipeController);

module.exports = recipeRouter;
