"use client";

import { bordersQueryFn, countryDetailsQueryFn } from "@/queries/apiQueries";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Border from "./Border";
import Loading from "./Loading";

export default function CountryDetails() {
  const params = useSearchParams();

  const countries = useQuery({
    queryKey: ["countries", params.get("country")],
    queryFn: countryDetailsQueryFn,
  });

  const borders = useQuery({
    queryKey: ["borders", countries.data![0].borders],
    queryFn: bordersQueryFn,
    enabled: countries.isSuccess && countries.data[0].borders.length > 0,
  });

  if (countries.isLoading || countries.isFetching) {
    return <Loading />;
  }

  if (countries.isSuccess) {
    const country = countries.data[0];
    return (
      <div className="mb-8 flex flex-col items-center gap-8 sm:flex-row sm:gap-20">
        <div className="relative h-52 w-full sm:aspect-[4/3] sm:h-auto sm:flex-1">
          <Image
            className="object-contain"
            alt={country.flags.alt}
            src={country.flags.png}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="w-full sm:w-auto sm:flex-[2]">
          <p className="mb-5 text-2xl font-extrabold">{country.name.common}</p>
          <div className="space-y-2 sm:columns-2 sm:space-y-1">
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
              {country.tld.length > 0 ? country.tld[0] : "Not found."}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {Object.values(country.languages).join(", ")}
            </p>
          </div>
          <div className="mt-12">
            <p className="inline-flex flex-wrap items-center gap-3">
              <span className="w-full font-semibold sm:w-auto">
                Border Countries:{" "}
              </span>
              {borders.data && Array.isArray(borders.data) ? (
                borders.data.map((border, i) => (
                  <Border key={`border-${i}`} name={border.name.common} />
                ))
              ) : borders.isError ? (
                <span>Failed to load borders!</span>
              ) : borders.isLoading ? (
                <Loading />
              ) : (
                <span>No Border Countries.</span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
