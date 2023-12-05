import { useQuery } from "@tanstack/react-query";
import { Order } from "./types";
import { apiRequest } from "./base";

const OrdersQueryKeys = {
  ALL: "orders",
};

export const ordersKeys = {
  all: [OrdersQueryKeys.ALL],
};

const BASE_URL = "/orders";

export const useOrders = () => {
  return useQuery<Order[]>({
    queryKey: ordersKeys.all,
    queryFn: () => apiRequest<Order[]>(`${BASE_URL}`, "get"),
  });
};
