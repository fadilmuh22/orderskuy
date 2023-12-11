import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { apiRequest } from "..";
import { UpdateUserPassword, User } from "./types";

const UsersQueryKeys = {
  USER: "user",
};

export const usersKeys = {
  user: [UsersQueryKeys.USER],
  detail: (id: string) => [UsersQueryKeys.USER, id],
};

const BASE_URL = "/user";

export const useUser = () => {
  return useQuery<User>({
    queryKey: usersKeys.user,
    queryFn: () => apiRequest<User>({ url: `${BASE_URL}/me`, method: "get" }),
  });
};

export const useUpdateUser = (
  mutationOptions?: UseMutationOptions<User, unknown, User>
) => {
  return useMutation<User, unknown, User>({
    mutationFn: (user) =>
      apiRequest<User>({ url: `${BASE_URL}/me`, method: "post", body: user }),
    ...mutationOptions,
  });
};

export const useUpdateUserPassword = (
  mutationOptions?: UseMutationOptions<User, unknown, UpdateUserPassword>
) => {
  return useMutation<User, unknown, UpdateUserPassword>({
    mutationFn: (payload) =>
      apiRequest<User, unknown>({
        url: `${BASE_URL}/update-password`,
        method: "post",
        body: payload,
      }),
    ...mutationOptions,
  });
};
