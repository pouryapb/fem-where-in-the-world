"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useRef } from "react";

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      timer.current = null;
      if (event.target.value === "") {
        current.delete("search");
      } else {
        current.set("search", event.target.value);
      }
      const search = current.toString();
      router.push(`${pathname}?${search}`);
    }, 200);
  };

  return (
    <div className="relative mt-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
      </div>
      <input
        defaultValue={searchParams.get("search") ?? ""}
        className="block w-96 rounded-md border-0 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-darkBlue dark:text-white sm:text-sm sm:leading-6"
        onChange={handleChange}
        placeholder="Search for a country"
        type="search"
      />
    </div>
  );
}
