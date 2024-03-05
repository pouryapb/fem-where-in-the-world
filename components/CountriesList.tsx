"use client";
import { countriesPreviewQueryFn } from "@/queries/apiQueries";
import { useQuery } from "@tanstack/react-query";
import CountryPreview from "./CountryPreview";

export default function CountriesList() {
  const { data, isSuccess, isPending, isFetching } = useQuery({
    queryKey: ["countries"],
    queryFn: countriesPreviewQueryFn,
  });

  if (isSuccess) {
    return (
      <div className="gap-15 inline-grid w-full grid-cols-4 place-items-center gap-y-16">
        {data.map((country, i) => {
          return <CountryPreview country={country} key={`ctry-${i}`} />;
        })}
      </div>
    );
  }

  if (isPending || isFetching) {
    return <p>Loading data...</p>;
  }
}
