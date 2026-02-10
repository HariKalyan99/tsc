import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addRecipe, fetchRecipes } from "../api/recipeApi";
import { useState } from "react";

export const Recipes = () => {
  const queryClient = useQueryClient();
  const [recipeInput, setRecipeInput] = useState("");

  const mutation = useMutation({
    mutationFn: addRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
    },
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  const handleAdd = (name: string) => {
    mutation.mutate({ name });
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1>Recipes</h1>
      {data?.recipes.map((recipe) => (
        <div key={recipe.id} className="flex flex-col">
          <p className="text-xs">{recipe.name}</p>
        </div>
      ))}

      <input
        type="text"
        value={recipeInput}
        onChange={(e) => setRecipeInput(e.target.value)}
        className="outline"
      />
      <button onClick={() => handleAdd(recipeInput)}>Add recipe</button>
    </div>
  );
};
