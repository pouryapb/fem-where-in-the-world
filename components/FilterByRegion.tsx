"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function FilterByRegion() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("");

  const handleOnChange = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (value === "reset") {
      setFilter("");
      current.delete("region");
    } else {
      setFilter(value);
      current.set("region", value);
    }

    const search = current.toString();
    router.push(`${pathname}?${search}`);
  };

  return (
    <Select onValueChange={handleOnChange} value={filter}>
      <SelectTrigger className="w-[180px] dark:bg-darkBlue dark:text-white">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent className="dark:bg-darkBlue dark:text-white">
        <SelectItem className="dark:focus:bg-veryDarkBlue-darkBg" value="reset">
          Reset
        </SelectItem>
        <SelectGroup>
          <SelectLabel>Regions</SelectLabel>
          <SelectItem
            className="dark:focus:bg-veryDarkBlue-darkBg"
            value="africa"
          >
            Africa
          </SelectItem>
          <SelectItem
            className="dark:focus:bg-veryDarkBlue-darkBg"
            value="americas"
          >
            America
          </SelectItem>
          <SelectItem
            className="dark:focus:bg-veryDarkBlue-darkBg"
            value="asia"
          >
            Asia
          </SelectItem>
          <SelectItem
            className="dark:focus:bg-veryDarkBlue-darkBg"
            value="europe"
          >
            Europe
          </SelectItem>
          <SelectItem
            className="dark:focus:bg-veryDarkBlue-darkBg"
            value="oceania"
          >
            Oceania
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
