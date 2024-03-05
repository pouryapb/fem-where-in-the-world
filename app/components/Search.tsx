import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

export default function Search({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="relative mt-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
      </div>
      <input
        className="block w-96 rounded-md border-0 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onClick={onClick}
        placeholder="Search for a country"
        type="search"
      />
    </div>
  );
}
