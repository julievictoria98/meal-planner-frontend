import { FaRegClock } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";

interface IRecipeCardProps {
  recipe: IRecipe;
}

function RecipeCard({ recipe }: IRecipeCardProps) {
  return (
    <div key={recipe.id} className="rounded-3xl bg-gray-500 w-80">
      <img
        className=" rounded-t-3xl"
        src="https://majspassion.dk/wp-content/uploads/2020/09/groen-avocado-salat.jpg"
        alt="grøn salat"
      />
      <div className="flex flex-col pb-5">
        <h1 className="text-xl font-medium">{recipe.title}</h1>
        <div className="flex items-center">
          <FaRegClock />
          <div>{recipe.minutes}</div>
        </div>
        <div className="flex items-center">
          <HiUsers />
          <div>{recipe.portions}</div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
