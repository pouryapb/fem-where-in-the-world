import BackNavigator from "@/components/BackNavigator";
import CountryDetails from "@/components/CountryDetails";
import { bordersQueryFn, countryDetailsQueryFn } from "@/queries/apiQueries";
import { CountryDetailResponse } from "@/types/responses";
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

  const borders = (
    queryClient.getQueriesData({
      queryKey: ["countries", searchParams["country"] ?? ""],
    })[0][1] as CountryDetailResponse[]
  )[0].borders;

  await queryClient.prefetchQuery({
    queryKey: ["borders", borders],
    queryFn: bordersQueryFn,
  });

  return (
    <div className="text-base dark:text-white">
      <div className="my-10 sm:my-14">
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
