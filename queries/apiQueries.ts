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
  const search = context.queryKey[1];

  if (search && search !== "") {
    url = `https://restcountries.com/v3.1/name/${search}?fullText=true&fields=name,capital,region,flags,population`;
  }

  const query = fetch(url).then((res) => res.json());
  return query;
};

export const countryDetailsQueryFn = (
  context: QueryFunctionContext,
): Promise<CountryDetailResponse[]> =>
  fetch(
    `https://restcountries.com/v3.1/name/${context.queryKey[1]}?fullText=true&fields=name,borders,tld,currencies,capital,region,subregion,languages,population,flags`,
  ).then((res) => res.json());

export const bordersQueryFn = (
  context: QueryFunctionContext,
): Promise<BorderName[]> =>
  fetch(
    `https://restcountries.com/v3.1/alpha?codes=${(context.queryKey[1] as string[]).join(",")}&fields=name&fields=name,borders,tld,currencies,capital,region,subregion,languages,population,flags`,
  ).then((res) => res.json());
