import type { Recipe } from "../types/recipe";

const API_URL = process.env.API_URL ?? "http://localhost:3000";

function withImageUrl(recipe: Recipe): Recipe {
  return recipe.imagePath
    ? { ...recipe, imagePath: `${API_URL}${recipe.imagePath}` }
    : recipe;
}

export async function getRecipes(): Promise<Recipe[]> {
  const res = await fetch(`${API_URL}/recipes`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to load recipes (HTTP ${res.status})`);
  }

  const recipes = (await res.json()) as Recipe[];
  return recipes.map(withImageUrl);
}

export async function getRecipe(id: string): Promise<Recipe | null> {
  const res = await fetch(`${API_URL}/recipes/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to load recipe ${id} (HTTP ${res.status})`);
  }
  return withImageUrl((await res.json()) as Recipe);
}