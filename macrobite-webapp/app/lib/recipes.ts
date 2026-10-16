import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Recipe } from "../types/recipe";

const file = path.join(process.cwd(), "data", "recipes.json");

export async function getRecipes(): Promise<Recipe[]> {
  return JSON.parse(await readFile(file, "utf-8")) as Recipe[];
}

// http://localhost:3001/recipe/5
export async function getRecipe(id: string): Promise<Recipe | null> {
  const recipes = await getRecipes();
  return recipes.find((r) => r.id === Number(id)) ?? null;
}
