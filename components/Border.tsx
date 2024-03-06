import Link from "next/link";

export default function Border({ name }: { name: string }) {
  return (
    <Link
      className="btn inline-block min-w-28 text-center text-sm"
      href={{
        pathname: "/details",
        query: { country: name },
      }}
    >
      {name}
    </Link>
  );
}
