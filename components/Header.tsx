import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-white shadow-sm shadow-neutral-200 dark:bg-veryDarkBlue-darkBg dark:shadow-neutral-700">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="select-none font-extrabold">
          Where in the world?
        </Link>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
