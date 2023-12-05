import { useQuery } from "@tanstack/react-query";
import { Cart } from "./types";
import { apiRequest } from "./base";

const CartQueryKeys = {
  ALL: "cart",
};

export const cartKeys = {
  all: [CartQueryKeys.ALL],
};

const BASE_URL = "/cart";

export const useCart = () => {
  return useQuery<Cart>({
    queryKey: cartKeys.all,
    queryFn: () => apiRequest<Cart>(`${BASE_URL}`, "get"),
  });
};
