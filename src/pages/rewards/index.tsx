import { useRewardRanks } from "@/api/rewards";
import { RewardRank } from "@/api/rewards/types";
import { useUser } from "@/api/users/users";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Table } from "@/components/common/Table";
import { RewardGrid } from "@/components/rewards/RewardGrid";
import { Tabs, Tab } from "@nextui-org/react";
import { ColumnDef } from "@tanstack/react-table";

export const RewardsPage = () => {
  const { data: ranks, isLoading: isRanksLoading } = useRewardRanks();
  const { data: user } = useUser();

  const columns: ColumnDef<RewardRank>[] = [
    {
      header: "Rank",
      cell: ({ row }) => row.index,
    },
    {
      header: "Name",
      accessorFn: (row) => row.username,
    },
    {
      header: "Accumulated Point(s)",
      accessorFn: (row) => row.total_points,
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-4">
      <SectionHeader title="Rewards" />

      <div className="flex flex-row justify-center gap-6">
        <div className="flex flex-col items-center justify-center p-1 text-blue-500 rounded-md bg-blue-50">
          <p className="text-[10px]">Accumulated Point(s)</p>
          <p className="text-xs font-bold">{user?.total_points}</p>
        </div>

        <div className="flex flex-col items-center justify-center p-1 rounded-md text-success-500 bg-success-50">
          <p className="text-[10px]">Current Point(s)</p>
          <p className="text-xs font-bold">{user?.current_points}</p>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <Tabs aria-label="Options" fullWidth>
          <Tab key="redeem" title="Redeem Points">
            <RewardGrid />
          </Tab>
          <Tab key="leaderboard" title="Leaderboard">
            <div className="w-full overflow-hidden">
              {isRanksLoading && <>Loading...</>}
              <Table<RewardRank> data={ranks?.items ?? []} columns={columns} />
            </div>
          </Tab>
        </Tabs>
      </div>

      <div></div>
      <div></div>
    </div>
  );
};
