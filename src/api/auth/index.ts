import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { apiRequest } from "..";
import {
  LoginResponse,
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from "./types";
import { User } from "../users/types";

const BASE_URL = "/user";

export const useLogin = (
  mutationOptions?: UseMutationOptions<LoginResponse, unknown, LoginPayload>
) => {
  return useMutation<LoginResponse, unknown, LoginPayload>({
    mutationFn: (payload) =>
      apiRequest<LoginResponse, LoginPayload>({
        url: `${BASE_URL}/signin`,
        method: "post",
        body: payload,
      }),
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
      apiRequest<User, RegisterPayload>({
        url: `${BASE_URL}/signup`,
        method: "post",
        body: payload,
      }),
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
