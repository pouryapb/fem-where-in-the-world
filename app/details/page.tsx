import BackNavigator from "@/components/BackNavigator";
import CountryDetails from "@/components/CountryDetails";
import { countryDetailsQueryFn } from "@/queries/apiQueries";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Details({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["countries", searchParams["country"] ?? ""],
    queryFn: countryDetailsQueryFn,
  });

  return (
    <div className="text-base">
      <div className="my-14">
        <BackNavigator />
      </div>
      <Suspense fallback={null}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CountryDetails />
        </HydrationBoundary>
      </Suspense>
    </div>
  );
}
