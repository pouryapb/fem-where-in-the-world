"use client";

import { bordersQueryFn, countryDetailsQueryFn } from "@/queries/apiQueries";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Border from "./Border";

export default function CountryDetails() {
  const params = useSearchParams();

  const countries = useQuery({
    queryKey: ["countries", params.get("country")],
    queryFn: countryDetailsQueryFn,
  });

  const borders = useQuery({
    queryKey: ["borders", countries.data![0].borders],
    queryFn: bordersQueryFn,
    enabled: countries.isSuccess,
  });

  if (countries.isLoading || countries.isFetching) {
    return <p>Loading...</p>;
  }

  if (countries.isSuccess) {
    const country = countries.data[0];
    return (
      <div className="flex flex-row items-center gap-20">
        <div className="relative aspect-[4/3] flex-1">
          <Image
            className="object-contain"
            alt={country.flags.alt}
            src={country.flags.png}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="flex-[2]">
          <p className="mb-5 text-2xl font-extrabold">{country.name.common}</p>
          <div className="columns-2 space-y-1">
            <p>
              <span className="font-semibold">Native Name: </span>
              {Object.values(country.name.nativeName)[0].common}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {new Intl.NumberFormat().format(country.population)}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>
              {country.subregion}
            </p>
            <p>
              <span className="font-semibold">
                {country.capital.length > 1 ? "Capitals: " : "Capital: "}
              </span>
              {country.capital.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {Object.values(country.currencies)
                .map((v) => v.name)
                .join(", ")}
            </p>
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {country.tld[0]}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {Object.values(country.languages).join(", ")}
            </p>
          </div>
          <div className="mt-12">
            <p className="inline-flex flex-wrap items-center gap-3">
              <span className="font-semibold">Border Countries: </span>
              {borders.isFetching || borders.isLoading ? (
                <span>Loading...</span>
              ) : (
                (borders.isSuccess &&
                  borders.data.map((border, i) => (
                    <Border key={`border-${i}`} name={border.name.common} />
                  ))) || <span>Failed to load borders!</span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
