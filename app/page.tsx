import CountriesList from "@/components/CountriesList";
import Filters from "@/components/Filters";
import { countriesPreviewQueryFn } from "@/queries/apiQueries";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["countries", searchParams?.["search"]],
    queryFn: countriesPreviewQueryFn,
  });

  return (
    <>
      <Filters />
      <div className="mb-10 text-sm">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CountriesList />
        </HydrationBoundary>
      </div>
    </>
  );
}
