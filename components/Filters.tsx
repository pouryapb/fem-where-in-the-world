import FilterByRegion from "./FilterByRegion";
import Search from "./Search";

export default function Filters() {
  return (
    <div className="flex items-center justify-between py-8">
      <Search />
      <FilterByRegion />
    </div>
  );
}
