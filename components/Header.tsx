import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <header className="shadow-sm shadow-neutral-200">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <h1 className="select-none font-extrabold">Where in the world?</h1>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
