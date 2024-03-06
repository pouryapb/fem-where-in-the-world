"use client";

import { countryDetailsQueryFn } from "@/queries/apiQueries";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function CountryDetails() {
  const params = useSearchParams();

  const { data, isLoading, isFetching, isSuccess } = useQuery({
    queryKey: ["countries", params.get("country")],
    queryFn: countryDetailsQueryFn,
  });

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  if (isSuccess) {
    const country = data[0];
    return (
      <div className="flex flex-row items-center gap-20">
        <div className="relative aspect-[4/3] w-96">
          <Image
            className="object-contain"
            alt={country.flags.alt}
            src={country.flags.png}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div>
          <p className="mb-5 text-2xl font-extrabold">{country.name.common}</p>
          <div className="columns-2 space-y-1">
            <p>
              <span className="font-semibold">Native Name: </span>
              {country.name.nativeName["nld"].common}
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
              {Object.values(country.currencies).join(", ")}
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
            <p>
              <span className="font-semibold">Border Countries: </span>
              {country.borders.join(", ")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
