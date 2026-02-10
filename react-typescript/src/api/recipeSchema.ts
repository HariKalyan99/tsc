import z from "zod";

export const RecipeSchema = z.object({
  id: z.number(),
  name: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  image: z.string().url(),
  rating: z.number(),
});

export const RecipeResponseSchema = z.object({
  recipes: z.array(RecipeSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export const AddRecipeSchema = z.object({
  name: z.string().min(1),
});

export type Recipe = z.infer<typeof RecipeSchema>;
export type RecipeResponse = z.infer<typeof RecipeResponseSchema>;

export type AddRecipe = z.infer<typeof AddRecipeSchema>;
