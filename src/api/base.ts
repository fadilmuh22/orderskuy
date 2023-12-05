import axios from "axios";

export const BASE_API_URL = import.meta.env.VITE_BASE_API_URL as string;

const axiosClient = axios.create({
  baseURL: BASE_API_URL,
});

axiosClient.interceptors.request.use(function (config) {
  const jwtToken = localStorage.getItem("jwtToken");
  config.headers["Authorization"] = "Bearer " + jwtToken;
  return config;
});

export async function apiRequest<K, V = unknown>(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  data?: V
) {
  try {
    const response = await axiosClient({
      url,
      method,
      data,
    });

    return response.data as K;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    return Promise.reject(error);
  }
}
