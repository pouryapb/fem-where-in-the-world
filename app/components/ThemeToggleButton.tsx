import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeToggleButton() {
  return (
    <button className=" space-x-2 hover:bg-neutral-100 p-2 rounded-md active:bg-neutral-200">
      <FontAwesomeIcon icon={faMoon} />
      <span className="select-none">Dark Mode</span>
    </button>
  );
}
