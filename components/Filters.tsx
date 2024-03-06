import FilterByRegion from "./FilterByRegion";
import Search from "./Search";

export default function Filters() {
  return (
    <div className="flex flex-col justify-between gap-8 py-8 sm:flex-row sm:items-center sm:gap-0">
      <Search />
      <FilterByRegion />
    </div>
  );
}
