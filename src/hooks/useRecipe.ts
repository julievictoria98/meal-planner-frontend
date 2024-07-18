import { useEffect, useState } from "react";
import DataService from "../utils/DataService";
import { toast } from "react-hot-toast";

function useRecipes() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dataService = new DataService<IRecipe>("/recipes");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipes = await dataService.getAll();
        setRecipes(recipes);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error("Failed to fetch recipes" + error.message);
        }
      }
    };

    getRecipes().then(() => setLoading(false));
  }, []);

  const getRecipe = async (id: number) => {
    try {
      return await dataService.get(id);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to fetch recipe " + error.message);
      }
    }
  };

  const createRecipe = async (recipe: Partial<IRecipe>) => {
    try {
      const newRecipe = await dataService.create(recipe);
      setRecipes([...recipes, newRecipe]);
      toast.success("Opskrift oprettet");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to create recipe" + error.message);
      }
    }
  };

  const patchRecipe = async (recipe: Partial<IRecipe>, id: number) => {
    try {
      await dataService.patch(recipe, id);
      toast.success("Opskrift opdateret");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to update recipe" + error.message);
      }
    }
  };

  const deleteRecipe = async (id: number) => {
    try {
      await dataService.delete(id);
      setRecipes(recipes.filter((recipe) => recipe.id !== id));
      toast.success("Opskrift slettet");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to delete recipe" + error.message);
      }
    }
  };

  return {
    recipes,
    loading,
    getRecipe,
    createRecipe,
    patchRecipe,
    deleteRecipe,
  };
}

export default useRecipes;
