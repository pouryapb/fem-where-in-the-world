import { cn } from "@/lib/utils";
import { CountryPreviewResponse } from "@/types/responses";
import Image from "next/image";
import Link from "next/link";

export default function CountryPreview({
  country,
  className,
}: {
  country: CountryPreviewResponse;
  className?: string;
}) {
  return (
    <Link
      href={{
        pathname: "/details",
        query: {
          country: country.name.common,
        },
      }}
      className={cn(
        className,
        "h-96 w-72 overflow-clip rounded-md bg-white text-lg shadow-md dark:bg-darkBlue dark:text-white sm:h-[17rem] sm:w-60 sm:text-base",
      )}
    >
      <div className="relative aspect-[3/2] w-full sm:aspect-[2/3] sm:h-32">
        <Image
          className="object-contain"
          alt={country.flags.alt}
          src={country.flags.png}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-full grow pl-5">
        <p className="mb-3 mt-4 font-extrabold">{country.name.common}</p>
        <p>
          <span className="font-semibold">Population: </span>
          <span>{new Intl.NumberFormat().format(country.population)}</span>
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          <span>{country.region}</span>
        </p>
        <p>
          <span className="font-semibold">
            {country.capital.length > 1 ? "Capitals: " : "Capital: "}
          </span>
          <span>{country.capital.join(", ")}</span>
        </p>
      </div>
    </Link>
  );
}
