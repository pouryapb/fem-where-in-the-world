import CountriesList from "@/components/CountriesList";
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
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="text-sm">
        <CountriesList />
      </div>
    </HydrationBoundary>
  );
}
