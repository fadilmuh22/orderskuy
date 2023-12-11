import { PaginationBase, PaginationBaseParams } from "@/api/pagination/types";
import { UseQueryOptions } from "@tanstack/react-query";
import { RewardRank } from "./types";
import { usePagination } from "../pagination";
import { apiRequest } from "..";

const BASE_URL = "/reward";

export const rewardKeys = {
  all: [BASE_URL],
  pagination: (params: PaginationBaseParams) => [
    BASE_URL,
    "pagination",
    params,
  ],
};

export const useRewardRanks = (
  queryOptions?: UseQueryOptions<PaginationBase<RewardRank>>
) => {
  return usePagination<RewardRank, PaginationBaseParams>({
    key: rewardKeys.all,
    apiFn: (params) =>
      apiRequest<PaginationBase<RewardRank>>({
        url: `/rank/list`,
        method: "get",
        params,
      }),
    queryOptions,
  });
};
