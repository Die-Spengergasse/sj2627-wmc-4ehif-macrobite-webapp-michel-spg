import Link from "next/link";
export default function Home() {
  return (
    <section className="my-auto flex flex-col items-center gap-8 rounded-2xl bgemerald-50 px-6 py-20 text-center dark:bg-gray-800">
      <p
        className="text-sm font-semibold uppercase tracking-widest text-emerald-700
dark:text-emerald-400"
      >
        Nutrition for training
      </p>
      <h1 className="max-w-3xl text-5xl font-bold tracking-tight">
        Fuel your gains. Cook with clear macros.
      </h1>
      <p className="max-w-xl text-lg text-gray-700 dark:text-gray-300">
        High-protein recipes for your training days, your cut or your bulk -
        with duration, servings and ingredients at a glance.
      </p>
      <Link
        href="/recipes"
        className="inline-flex items-center justify-center rounded-lg bg-emerald-600
px-6 py-3 text-lg font-medium text-white transition-colors duration-300 hover:bgemerald-700
  dark:bg-emerald-500 dark:text-gray-900 dark:hover:bg-emerald-400"
      >
        Browse recipes
      </Link>
    </section>
  );
}
