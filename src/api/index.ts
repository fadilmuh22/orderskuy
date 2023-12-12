import axios from "axios";
import { ApiError } from "./types";

export const BASE_API_URL = import.meta.env.VITE_BASE_API_URL as string;

const axiosClient = axios.create({
  baseURL: BASE_API_URL + "/api",
});

axiosClient.interceptors.request.use(function (config) {
  const jwtToken = localStorage.getItem("jwtToken");
  const merchantId = localStorage.getItem("merchantId");

  config.headers["Authorization"] = "Bearer " + jwtToken;
  config.headers["x-merchant-id"] =
    merchantId && merchantId !== "" && merchantId !== "undefined"
      ? merchantId
      : "resto.order.pat";

  return config;
});

export type ApiRequestProps<V> =
  | {
      url: string;
      method: "get";
      params?: Record<string, unknown>;
    }
  | {
      url: string;
      method: "post" | "put" | "patch" | "delete";
      body?: V;
      params?: Record<string, unknown>;
    };

export async function apiRequest<K, V = unknown>(props: ApiRequestProps<V>) {
  try {
    const response = await axiosClient({
      url: props.url,
      method: props.method,
      data: props.method !== "get" ? props.body : {},
      params: props.params,
    });

    return response.data.data as K;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        localStorage.removeItem("jwtToken");
        window.location.href = "#/login";
      }
      if (error.response?.status === 500) {
        const errorData: ApiError = {
          status: "error",
          error_message: "Something went wrong",
        };
        throw errorData;
      }
      throw error.response?.data as ApiError;
    }
    return Promise.reject(error);
  }
}
