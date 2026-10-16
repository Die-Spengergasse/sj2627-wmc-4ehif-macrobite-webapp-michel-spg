import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe } from "../../lib/recipes";

type RecipeDetailProps = { params: Promise<{ id: string }> };

export default async function RecipeDetailPage({ params }: RecipeDetailProps) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  if (!recipe) {
    notFound();
  }
  
  return (
    <div className="mx-auto w-full max-w-5xl my-5">
      <Link
        href="/recipes"
        className="mb-4 inline-block text-sm text-gray-600 hover:text-gray-900
dark:text-emerald-400 dark:hover:text-emerald-200"
      >
        Back to recipes
      </Link>
      <div
        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-8
dark:bg-gray-800 dark:border-gray-700"
      >
        <h1 className="mb-2 text-2xl font-semibold md:text-3xl dark:text-white">
          {recipe.title}
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          {recipe.description}
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {recipe.imagePath && (
            <Image
              src={recipe.imagePath}
              alt={recipe.title}
              width={600}
              height={400}
              className="h-full w-full rounded-xl border border-gray-200 object-cover"
            />
          )}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray700">
                <p className="text-xs uppercase text-gray-500">
                  Preparation time
                </p>
                <p className="text-lg font-semibold dark:text-emerald-400">
                  {recipe.duration} min
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray700">
                <p className="text-xs uppercase text-gray-500">Servings</p>
                <p className="text-lg font-semibold dark:text-emerald-400">
                  {recipe.servings}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray700">
              <h2 className="mb-3 text-lg font-semibold dark:text-white">
                Ingredients for {recipe.servings} servings
              </h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {recipe.ingredients.map((item) => (
                  <li key={item.id} className="py-0.5">
                    {item.amount} {item.unit} {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-xl border border-gray-200 p-5 dark:border-gray700">
          <h2 className="mb-3 text-lg font-semibold dark:text-white">
            Instructions
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
}
