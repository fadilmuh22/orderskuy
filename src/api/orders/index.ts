import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { apiRequest } from "..";
import { OrderPayload, OrderResponse, Transaction } from "./types";
import { PaginationBase, PaginationBaseParams } from "../pagination/types";
import { productsKeys } from "../products";
import { usePagination } from "../pagination";
import { cartKeys } from "../cart";

const OrdersQueryKeys = {
  ALL: "order",
};

export const ordersKeys = {
  all: [OrdersQueryKeys.ALL],
  detail: (id: number) => [OrdersQueryKeys.ALL, id],
};

const BASE_URL = "/transaction";

export const useOrderFromCart = (
  mutationOptions?: UseMutationOptions<OrderResponse, unknown, OrderPayload>
) => {
  const queryClient = useQueryClient();
  return useMutation<OrderResponse, unknown, OrderPayload>({
    mutationFn: (payload) =>
      apiRequest<OrderResponse>({
        url: `${BASE_URL}/order`,
        method: "post",
        body: payload,
      }),
    ...mutationOptions,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: cartKeys.all });
      mutationOptions?.onSuccess?.(data, variables, context);
    },
  });
};

export const useOrders = (
  queryOptions?: UseQueryOptions<PaginationBase<Transaction>>,
  defaultParams?: PaginationBaseParams
) => {
  return usePagination<Transaction, PaginationBaseParams>({
    key: productsKeys.all,
    apiFn: (params) =>
      apiRequest<PaginationBase<Transaction>>({
        url: `${BASE_URL}/list`,
        method: "get",
        params,
      }),
    queryOptions,
    defaultParams,
  });
};

export const useOrder = (
  id: number,
  queryOptions?: UseQueryOptions<Transaction>
) => {
  return useQuery<Transaction>({
    queryKey: ordersKeys.detail(id),
    queryFn: () =>
      apiRequest<Transaction>({
        url: `${BASE_URL}/status`,
        method: "post",
        body: { id },
      }),
    ...queryOptions,
    enabled: id !== 0,
  });
};
