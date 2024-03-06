"use client";
import { countriesPreviewQueryFn } from "@/queries/apiQueries";
import { useQuery } from "@tanstack/react-query";
import CountryPreview from "./CountryPreview";
import { useSearchParams } from "next/navigation";
import Loading from "./Loading";

export default function CountriesList() {
  const params = useSearchParams();

  const { data, isSuccess, isPending, isFetching } = useQuery({
    queryKey: ["countries", params.get("search")],
    queryFn: countriesPreviewQueryFn,
  });

  if (isSuccess) {
    if (data.length === 0 || !Array.isArray(data)) {
      return (
        <span className="text-veryDarkBlue-lightText dark:text-white">
          No Results Found.
        </span>
      );
    }

    const hasRegion = params.has("region");
    let result = data;
    if (hasRegion) {
      const region = params.get("region");
      result = data.filter(
        (country) => country.region.toLowerCase() === region,
      );
    }
    return (
      <div className="sm:gap-15 flex w-full flex-col place-items-center gap-y-16 sm:inline-grid sm:grid-cols-4">
        {result.map((country, i) => {
          return <CountryPreview country={country} key={`ctry-${i}`} />;
        })}
      </div>
    );
  }

  if (isPending || isFetching) {
    return <Loading />;
  }
}
