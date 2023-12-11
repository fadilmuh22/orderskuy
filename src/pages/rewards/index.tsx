import { useOrders } from "@/api/orders";
import { Transaction } from "@/api/orders/types";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Table } from "@/components/common/Table";
import { RewardGrid } from "@/components/rewards/RewardGrid";
import { Tabs, Tab } from "@nextui-org/react";
import { ColumnDef } from "@tanstack/react-table";

export const RewardsPage = () => {
  const { data: orders, isLoading: isOrdersLoading } = useOrders();

  const columns: ColumnDef<Transaction>[] = [
    {
      header: "Rank",
      cell: ({ row }) => row.index,
    },
    {
      header: "Name",
      accessorFn: () => "John Doe",
    },
    {
      header: "Accumulated Point(s)",
      accessorFn: (row) => row.point,
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-4">
      <SectionHeader title="Rewards" />

      <div className="flex flex-col w-full">
        <Tabs aria-label="Options" fullWidth>
          <Tab key="redeem" title="Redeem Points">
            <RewardGrid />
          </Tab>
          <Tab key="leaderboard" title="Leaderboard">
            <div className="w-full overflow-hidden">
              {isOrdersLoading && <>Loading...</>}
              <Table<Transaction>
                data={orders?.items ?? []}
                columns={columns}
              />
            </div>
          </Tab>
        </Tabs>
      </div>

      <div></div>
      <div></div>
    </div>
  );
};
