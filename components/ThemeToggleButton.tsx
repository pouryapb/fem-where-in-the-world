import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeToggleButton() {
  return (
    <button className="btn">
      <FontAwesomeIcon icon={faMoon} />
      <span className="select-none">Dark Mode</span>
    </button>
  );
}
