import { useOrders } from "@/api/orders";
import { Transaction } from "@/api/orders/types";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Table } from "@/components/common/Table";
import { ColumnDef } from "@tanstack/react-table";

export const OrdersPage = () => {
  const { data: orders, isLoading: isOrdersLoading } = useOrders();

  const columns: ColumnDef<Transaction>[] = [
    {
      header: "No",
      cell: ({ row }) => row.index,
    },
    {
      header: "Invoice",
      accessorFn: (row) => row.trx_code,
    },
    {
      header: "Table Number",
      accessorFn: (row) => row.table_number,
    },
    {
      header: "Total",
      accessorFn: (row) => `Rp ${parseInt(row.total ?? "0").toLocaleString()}`,
    },
    {
      header: "Status",
      cell: ({ row }) => (
        <p className="text-emerald-500 font-bold text-[10px] capitalize">
          {row.original.status}
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-4">
      <SectionHeader title="My" subtitle="Orders" />

      <div className="w-full overflow-hidden">
        {isOrdersLoading && <>Loading...</>}
        <Table<Transaction> data={orders?.items ?? []} columns={columns} />
      </div>

      <div></div>
      <div></div>
    </div>
  );
};
