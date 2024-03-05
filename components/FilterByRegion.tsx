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
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="reset">Reset</SelectItem>
        <SelectGroup>
          <SelectLabel>Regions</SelectLabel>
          <SelectItem value="africa">Africa</SelectItem>
          <SelectItem value="america">America</SelectItem>
          <SelectItem value="asia">Asia</SelectItem>
          <SelectItem value="europe">Europe</SelectItem>
          <SelectItem value="oceania">Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
