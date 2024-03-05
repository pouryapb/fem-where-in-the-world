import { CountryPreviewResponse } from "@/types/responses";

export const countriesPreviewQueryFn = (): Promise<CountryPreviewResponse[]> =>
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,flags",
  ).then((res) => res.json());
