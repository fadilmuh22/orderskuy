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

const BASE_URL = "/users";

export const useUser = (id: string) => {
  return useQuery<User>({
    queryKey: usersKeys.detail(id),
    queryFn: () => apiRequest<User>(`${BASE_URL}/${id}`, "get"),
  });
};
