import axios from "axios";
import {
  AddRecipeSchema,
  RecipeResponseSchema,
  RecipeSchema,
} from "./recipeSchema";

export const fetchRecipes = async () => {
  const { data } = await axios.get("http://localhost:8081/recipes");
  return RecipeResponseSchema.parse(data);
};

export const addRecipe = async (input: unknown) => {
  const validated = AddRecipeSchema.parse(input);

  const { data } = await axios.post("http://localhost:8081/recipes", validated);

  return RecipeSchema.parse(data);
};
