import { useQuery } from "@tanstack/react-query";
import {
  PaginationBaseParams,
  PaginationParams,
  UsePaginationProps,
} from "./types";
import { useState } from "react";

export const DefaultParams: PaginationBaseParams = {
  // page: 1,
  // search: "",
  // size: 10,
  pagination: true,
};

export const usePagination = <Data, Params>(
  props: UsePaginationProps<Data, Params>
) => {
  const { defaultParams = DefaultParams } = props;
  const [params, setParams] = useState<PaginationParams<Params>>({
    ...{ ...(defaultParams as PaginationParams<Params>) },
  });

  const searchQuery = useQuery({
    queryKey: [...props.key, "pagination", params],
    queryFn: () => props.apiFn(params),
    ...props.queryOptions,
  });

  return {
    ...searchQuery,
    setParams: (params: PaginationParams<Params>) =>
      setParams({ ...params, ...props.defaultParams }),
  };
};
