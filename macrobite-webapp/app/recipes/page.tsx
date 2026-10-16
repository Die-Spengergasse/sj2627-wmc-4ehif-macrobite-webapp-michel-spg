import RecipeGrid from "../components/RecipeGrid";
import { getRecipes } from "../lib/recipes";

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-2xl dark:text-white">Recipes: {recipes.length}</p>
      <RecipeGrid recipes={recipes} />
    </div>
  );
}
