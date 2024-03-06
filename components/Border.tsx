import Link from "next/link";

export default function Border({ name }: { name: string }) {
  return (
    <Link
      className="btn inline-block min-w-24 text-center text-sm sm:min-w-28"
      href={{
        pathname: "/details",
        query: { country: name },
      }}
    >
      {name}
    </Link>
  );
}
