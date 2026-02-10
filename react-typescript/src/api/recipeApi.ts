import axios from "axios";
import {
  AddRecipeSchema,
  RecipeResponseSchema,
  RecipeSchema,
} from "./recipeSchema";

export const fetchRecipes = async () => {
  const { data } = await axios.get("https://dummyjson.com/recipes");
  return RecipeResponseSchema.parse(data);
};

export const addRecipe = async (input: unknown) => {
  const validated = AddRecipeSchema.parse(input);

  const { data } = await axios.post(
    "https://dummyjson.com/recipes/add",
    validated,
  );

  return RecipeSchema.parse(data);
};
