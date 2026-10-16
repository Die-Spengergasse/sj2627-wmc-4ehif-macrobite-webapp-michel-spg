import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "../types/recipe";

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col
  border border-gray-200
  dark:bg-gray-800 dark:border-gray-700"
        >
          {recipe.imagePath && (
            <Image
              src={recipe.imagePath}
              alt={recipe.title}
              width={400}
              height={192}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
          )}
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-1 dark:text-white">
              {recipe.title}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-medium">Duration:</span> {recipe.duration}{" "}
              min
            </p>
          </div>
          <div className="mt-4">
            <Link
              href={`/recipes/${recipe.id}`}
              className="block w-full px-4 py-2 text-center bg-emerald-100 textemerald-900 rounded-lg shadow hover:bg-emerald-200 transition
  dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bgemerald-800"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
