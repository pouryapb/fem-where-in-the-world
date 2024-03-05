import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <header className="shadow-sm shadow-neutral-200">
      <div className="h-16 container mx-auto flex justify-between items-center">
        <h1 className="font-extrabold select-none">Where in the world?</h1>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
