import { useQuery } from "@tanstack/react-query";
import { User } from "./types";
import { apiRequest } from "./base";

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
    queryFn: () => apiRequest<User>(`${BASE_URL}/me`, "get"),
  });
};
