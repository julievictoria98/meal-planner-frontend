interface IRecipe {
  id: number;
  title: string;
  guide: string;
  minutes: number;
  imageURL: string;
  portions: number;
  ingredients: IIngredientWithQuantity[];
}

interface IIngredientWithQuantity {
  ingredientId: number;
  name: string;
  quantity: number;
  unit: string;
}

interface IIngredient {
  id: number;
  name: string;
  unit: string;
}
