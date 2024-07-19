import useRecipes from "../../hooks/useRecipe";
import RecipeCard from "./component/RecipeCard";

function RecipeList() {
  const { recipes } = useRecipes();

  return (
    <div className="grid grid-cols-3 gap-y-10 justify-items-center mx-32">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
}
export default RecipeList;
