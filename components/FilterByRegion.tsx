"use client";
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
  const [filter, setFilter] = useState("");

  const handleOnChange = (value: string) => {
    if (value === "reset") setFilter("");
    else setFilter(value);
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
            value="america"
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
