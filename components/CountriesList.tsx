"use client";
import { countriesPreviewQueryFn } from "@/queries/apiQueries";
import { useQuery } from "@tanstack/react-query";
import CountryPreview from "./CountryPreview";
import { useSearchParams } from "next/navigation";

export default function CountriesList() {
  const params = useSearchParams();

  const { data, isSuccess, isPending, isFetching } = useQuery({
    queryKey: ["countries"],
    queryFn: countriesPreviewQueryFn,
  });

  if (isSuccess) {
    const hasRegion = params.has("region");
    let result = data;
    if (hasRegion) {
      const region = params.get("region");
      result = data.filter(
        (country) => country.region.toLowerCase() === region,
      );
    }
    return (
      <div className="gap-15 inline-grid w-full grid-cols-4 place-items-center gap-y-16">
        {result.map((country, i) => {
          return <CountryPreview country={country} key={`ctry-${i}`} />;
        })}
      </div>
    );
  }

  if (isPending || isFetching) {
    return <p>Loading data...</p>;
  }
}
