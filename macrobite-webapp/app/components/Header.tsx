import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
];

export default function Header() {
  return (
    <header
      className="rounded-lg mb-3 bg-white dark:bg-gray-800 flex items-center
justify-center px-8 py-2"
    >
      <nav className="text-lg text-center">
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="p-3 border-b-2 border-transparent duration-200
hover:border-emerald-500 hover:text-emerald-500
  dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
