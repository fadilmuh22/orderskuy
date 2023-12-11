import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { apiRequest } from "..";
import { CartProduct, DeleteCartPayload } from "./types";
import { PaginationBase, PaginationBaseParams } from "../pagination/types";
import { usePagination } from "../pagination";

const CartQueryKeys = {
  ALL: "cart",
};

export const cartKeys = {
  all: [CartQueryKeys.ALL],
  search: (params: PaginationBaseParams) => [
    CartQueryKeys.ALL,
    "search",
    params,
  ],
};

const BASE_URL = "/cart";

export const useDeleteCart = (
  mutationOptions?: UseMutationOptions<unknown, unknown, DeleteCartPayload>
) => {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, DeleteCartPayload>({
    mutationFn: (payload) =>
      apiRequest<unknown>({
        url: `${BASE_URL}/delete`,
        method: "delete",
        body: payload,
      }),
    ...mutationOptions,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: cartKeys.all });
      mutationOptions?.onSuccess?.(data, variables, context);
    },
  });
};

export const useCarts = (
  queryOptions?: UseQueryOptions<PaginationBase<CartProduct>>,
  defaultParams?: PaginationBaseParams
) => {
  return usePagination<CartProduct, PaginationBaseParams>({
    key: cartKeys.all,
    apiFn: (params) =>
      apiRequest<PaginationBase<CartProduct>>({
        url: `${BASE_URL}/list`,
        method: "get",
        params,
      }),
    queryOptions,
    defaultParams,
  });
};
