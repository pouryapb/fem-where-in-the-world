import {
  BorderName,
  CountryDetailResponse,
  CountryPreviewResponse,
} from "@/types/responses";
import { QueryFunctionContext } from "@tanstack/react-query";

export const countriesPreviewQueryFn = (): Promise<CountryPreviewResponse[]> =>
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,flags",
  ).then((res) => res.json());

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
