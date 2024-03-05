import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeToggleButton() {
  return (
    <button className="space-x-2 rounded-md p-2 ring-1 ring-neutral-100 hover:bg-neutral-100 hover:ring-neutral-200 active:bg-neutral-200 active:ring-neutral-300">
      <FontAwesomeIcon icon={faMoon} />
      <span className="select-none">Dark Mode</span>
    </button>
  );
}
