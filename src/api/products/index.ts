import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { apiRequest } from "..";
import {
  Category,
  CategoryPaginationParams,
  Product,
  ProductPaginationParams,
  ProductToCardPayload,
  ProductToCardResponse,
} from "./types";
import { usePagination } from "../pagination";
import { PaginationBase, PaginationBaseParams } from "../pagination/types";
import { cartKeys } from "../cart";

const ProductsQueryKeys = {
  ALL: "product",
  CATEGORY: "category",
  REWARD: "reward",
  TOP: "top",
};

export const productsKeys = {
  all: [ProductsQueryKeys.ALL],
  detail: (id: string) => [ProductsQueryKeys.ALL, id],
  category: [ProductsQueryKeys.CATEGORY],
  reward: [ProductsQueryKeys.REWARD],
  top: [ProductsQueryKeys.TOP],
  paginationProducts: (params: ProductPaginationParams) => [
    ProductsQueryKeys.ALL,
    "pagination",
    params,
  ],
  paginationCategories: (params: PaginationBaseParams) => [
    ProductsQueryKeys.ALL,
    ProductsQueryKeys.CATEGORY,
    "pagination",
    params,
  ],
  paginationRewards: (params: PaginationBaseParams) => [
    ProductsQueryKeys.ALL,
    ProductsQueryKeys.REWARD,
    "pagination",
    params,
  ],
  paginationTopSellers: (params: PaginationBaseParams) => [
    ProductsQueryKeys.ALL,
    ProductsQueryKeys.TOP,
    "pagination",
    params,
  ],
};

const BASE_URL = "/product";

export const useProduct = (
  id: string,
  queryOptions?: UseQueryOptions<PaginationBase<Product>>
) => {
  return useQuery<PaginationBase<Product>>({
    queryKey: productsKeys.detail(id),
    queryFn: () =>
      apiRequest<PaginationBase<Product>>({
        url: `${BASE_URL}/list`,
        method: "get",
        params: { id },
      }),
    enabled: id !== "",
    ...queryOptions,
  });
};

export const useProductToCart = (
  mutationOptions?: UseMutationOptions<
    ProductToCardResponse,
    unknown,
    ProductToCardPayload
  >
) => {
  const queryClient = useQueryClient();
  return useMutation<ProductToCardResponse, unknown, ProductToCardPayload>({
    mutationFn: (payload) =>
      apiRequest<ProductToCardResponse, ProductToCardPayload>({
        url: `${BASE_URL}/add_to_cart`,
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

export const useProducts = (
  queryOptions?: UseQueryOptions<PaginationBase<Product>>,
  defaultParams?: ProductPaginationParams
) => {
  return usePagination<Product, ProductPaginationParams>({
    key: productsKeys.all,
    apiFn: (params) =>
      apiRequest<PaginationBase<Product>>({
        url: `${BASE_URL}/list`,
        method: "get",
        params,
      }),
    queryOptions,
    defaultParams,
  });
};

export const useCategoryProducts = (
  queryOptions?: UseQueryOptions<PaginationBase<Category>>,
  defaultParams?: CategoryPaginationParams
) => {
  return usePagination<Category, CategoryPaginationParams>({
    key: productsKeys.category,
    apiFn: (params) =>
      apiRequest<PaginationBase<Category>>({
        url: `${BASE_URL}/category/list`,
        method: "get",
        params,
      }),
    queryOptions,
    defaultParams,
  });
};

export const useRewardProducts = (
  queryOptions?: UseQueryOptions<PaginationBase<Product>>,
  defaultParams?: ProductPaginationParams
) => {
  return usePagination<Product, ProductPaginationParams>({
    key: productsKeys.reward,
    apiFn: (params) =>
      apiRequest<PaginationBase<Product>>({
        url: `${BASE_URL}/list/reward`,
        method: "get",
        params,
      }),
    queryOptions,
    defaultParams,
  });
};

export const useTopProducts = (
  queryOptions?: UseQueryOptions<PaginationBase<Product>>,
  defaultParams?: ProductPaginationParams
) => {
  return usePagination<Product, ProductPaginationParams>({
    key: productsKeys.top,
    apiFn: (params) =>
      apiRequest<PaginationBase<Product>>({
        url: `${BASE_URL}/list/top_seller`,
        method: "get",
        params,
      }),
    queryOptions,
    defaultParams,
  });
};
