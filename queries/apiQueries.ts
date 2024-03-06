import {
  BorderName,
  CountryDetailResponse,
  CountryPreviewResponse,
} from "@/types/responses";
import { QueryFunctionContext } from "@tanstack/react-query";
import { ReadonlyURLSearchParams } from "next/navigation";

export const countriesPreviewQueryFn = (
  context: QueryFunctionContext,
): Promise<CountryPreviewResponse[]> => {
  let url =
    "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population";
  const params = context.queryKey[1] as ReadonlyURLSearchParams;

  if (params && params.has("search")) {
    url = `https://restcountries.com/v3.1/name/${params.get("search")}?fullText=true&fields=name,capital,region,flags,population`;
  }

  const query = fetch(url).then((res) => res.json());
  return query;
};

export const countryDetailsQueryFn = (
  context: QueryFunctionContext,
): Promise<CountryDetailResponse[]> =>
  fetch(
    `https://restcountries.com/v3.1/name/${context.queryKey[1]}?fullText=true`,
  ).then((res) => res.json());

export const bordersQueryFn = (
  context: QueryFunctionContext,
): Promise<BorderName[]> =>
  fetch(
    `https://restcountries.com/v3.1/alpha?codes=${(context.queryKey[1] as string[]).join(",")}&fields=name`,
  ).then((res) => res.json());
