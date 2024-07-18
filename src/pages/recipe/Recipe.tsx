// import Header from "./component/Header";
// import IngredientList from "./component/IngredientList";
// import Guide from "./component/Guide";
import useRecipes from "../../hooks/useRecipe";

function Recipe() {
  const { recipes, loading } = useRecipes();

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <div>{recipe.title}</div>
              <div>
                <div>{recipe.minutes} Minutes</div>
                <div>{recipe.portions} Portions</div>
              </div>
              <div>{recipe.guide}</div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
export default Recipe;
