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
import { ApiError } from "../types";

const BASE_URL = "/user";

export const useLogin = (
  mutationOptions?: UseMutationOptions<LoginResponse, ApiError, LoginPayload>
) => {
  return useMutation<LoginResponse, ApiError, LoginPayload>({
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
  mutationOptions?: UseMutationOptions<User, ApiError, RegisterPayload>
) => {
  return useMutation<User, ApiError, RegisterPayload>({
    mutationFn: (payload) =>
      apiRequest<User, RegisterPayload>({
        url: `${BASE_URL}/signup`,
        method: "post",
        body: payload,
      }),
    ...mutationOptions,
  });
};

export const useLogout = (mutationOptions?: UseMutationOptions) => {
  return useMutation({
    mutationFn: () => {
      return new Promise<void>((resolve) => {
        localStorage.clear();
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
