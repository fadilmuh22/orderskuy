import { useQuery } from "@tanstack/react-query";
import { Food } from "./types";
import { apiRequest } from "./base";

const FoodsQueryKeys = {
  ALL: "food",
};

export const foodsKeys = {
  all: [FoodsQueryKeys.ALL],
};

const BASE_URL = "/foods";

export const useFoods = () => {
  return useQuery<Food>({
    queryKey: foodsKeys.all,
    queryFn: () => apiRequest<Food>(`${BASE_URL}`, "get"),
  });
};
