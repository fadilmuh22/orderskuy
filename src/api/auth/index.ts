import {
  UseMutationOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { apiRequest } from "..";
import {
  LoginResponse,
  LoginPayload,
  RegisterPayload,
  AuthResponse,
  GoogleCallbackPayload,
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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return new Promise<void>((resolve) => {
        queryClient.clear();
        localStorage.clear();
        resolve();
      });
    },
    ...mutationOptions,
  });
};

export const useGoogleCallback = (
  mutationOptions?: UseMutationOptions<
    LoginResponse,
    ApiError,
    GoogleCallbackPayload
  >
) => {
  return useMutation<LoginResponse, ApiError, GoogleCallbackPayload>({
    mutationFn: (payload) =>
      apiRequest<LoginResponse, GoogleCallbackPayload>({
        url: `${BASE_URL}/google_callback`,
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
