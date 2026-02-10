import { create } from "zustand";
import type { Recipe } from "../api/recipeSchema";

interface RecipeState {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
  addRecipe: (recipe: Recipe) => void;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  recipes: [],
  setRecipes: (recipes) => set({ recipes }),
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [recipe, ...state.recipes],
    })),
}));
