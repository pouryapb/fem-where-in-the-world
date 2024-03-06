import CountriesList from "@/components/CountriesList";
import Filters from "@/components/Filters";
import { countriesPreviewQueryFn } from "@/queries/apiQueries";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["countries"],
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
