import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { LoginPayload, RegisterPayload, User } from "./types";
import { apiRequest } from "./base";

const BASE_URL = "/auth";

export const useLogin = (
  mutationOptions?: UseMutationOptions<User, unknown, LoginPayload>
) => {
  return useMutation<User, unknown, LoginPayload>({
    mutationFn: (payload) =>
      apiRequest<User, LoginPayload>(`${BASE_URL}/login`, "post", payload),
    ...mutationOptions,
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
  mutationOptions?: UseMutationOptions<User, unknown, unknown>
) => {
  return useMutation<User, unknown, unknown>({
    mutationFn: () => apiRequest<User>(`${BASE_URL}/logout`, "post"),
    ...mutationOptions,
  });
};
