import { UseQueryOptions } from "@tanstack/react-query";

export interface PaginationBase<T> {
  total_items: number;
  items: T[];
  total_pages: number;
  current_page: number;
}

export type PaginationBaseParams = Partial<{
  page: number;
  size: number;
  search: string;
  pagination: boolean;
}>;

export type PaginationParams<Params = unknown> = PaginationBaseParams & Params;

export type UsePaginationProps<Data, Params> = {
  key: string[];
  defaultParams?: Partial<PaginationParams<Params>>;
  apiFn: (params: PaginationParams<Params>) => Promise<PaginationBase<Data>>;
  queryOptions?: UseQueryOptions<PaginationBase<Data>>;
};
