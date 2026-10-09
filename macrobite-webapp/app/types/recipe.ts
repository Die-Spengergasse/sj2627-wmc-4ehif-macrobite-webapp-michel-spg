export interface Ingredient {
  id: number;
  recipeId: number;
  name: string;
  amount: number;
  unit: string | null;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  duration: number;
  servings: number;
  imagePath?: string;
  instructions: string;
  ingredients: Ingredient[];
}