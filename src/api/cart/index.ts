import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { apiRequest } from "..";
import { CartProduct, DeleteCartPayload } from "./types";

const CartQueryKeys = {
  ALL: "cart",
};

export const cartKeys = {
  all: [CartQueryKeys.ALL],
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

export const useCarts = (queryOptions?: UseQueryOptions<CartProduct>) => {
  return useQuery<CartProduct>({
    queryKey: cartKeys.all,
    queryFn: () =>
      apiRequest<CartProduct>({ url: `${BASE_URL}/list`, method: "get" }),
    ...queryOptions,
  });
};
