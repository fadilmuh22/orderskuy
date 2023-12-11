import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { LoginPayload, LoginResponse, RegisterPayload, User } from "./types";
import { apiRequest } from "./base";

const BASE_URL = "/user";

export const useLogin = (
  mutationOptions?: UseMutationOptions<LoginResponse, unknown, LoginPayload>
) => {
  return useMutation<LoginResponse, unknown, LoginPayload>({
    mutationFn: (payload) =>
      apiRequest<LoginResponse, LoginPayload>(
        `${BASE_URL}/signin`,
        "post",
        payload
      ),
    ...mutationOptions,
    onSuccess: (data, payload, params) => {
      localStorage.setItem("jwtToken", data.token);
      mutationOptions?.onSuccess?.(data, payload, params);
    },
  });
};

export const useSignUp = (
  mutationOptions?: UseMutationOptions<User, unknown, RegisterPayload>
) => {
  return useMutation<User, unknown, RegisterPayload>({
    mutationFn: (payload) =>
      apiRequest<User, RegisterPayload>(`${BASE_URL}/signup`, "post", payload),
    ...mutationOptions,
  });
};

export const useLogout = (
  mutationOptions?: UseMutationOptions<void, unknown, unknown>
) => {
  return useMutation<void, unknown, unknown>({
    mutationFn: () => {
      return new Promise((resolve) => {
        localStorage.removeItem("jwtToken");
        resolve();
      });
    },
    ...mutationOptions,
  });
};

export type AuthResponse = {
  isAuthenticated: boolean;
};

export const useAuth = () => {
  return useQuery<AuthResponse>({
    queryKey: ["auth"],
    queryFn: () => {
      return new Promise((resolve) => {
        const token = localStorage.getItem("jwtToken");
        resolve({ isAuthenticated: !!token });
      });
    },
  });
};
