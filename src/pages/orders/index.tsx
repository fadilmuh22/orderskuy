import { useOrders } from "@/api/orders";
import { Transaction } from "@/api/orders/types";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Table } from "@/components/common/Table";
import { getTransactionStatusDetails } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const OrdersPage = () => {
  const { data: orders, isLoading: isOrdersLoading } = useOrders();

  const columns: ColumnDef<Transaction>[] = [
    {
      header: "No",
      cell: ({ row }) => row.index,
    },
    {
      header: "Invoice",
      cell: ({ row }) => (
        <Link to={`/orders/${row.original.id}`} className="text-primary-500">
          {row.original.trx_code}
        </Link>
      ),
    },
    {
      header: "Table Number",
      accessorFn: (row) => row.table_number,
    },
    {
      header: "Total",
      accessorFn: (row) =>
        `Rp ${parseFloat(row.total ?? "0").toLocaleString()}`,
    },
    {
      header: "Status",
      cell: ({ row }) => (
        <p
          className={classNames(
            "font-bold text-[10px] capitalize",
            getTransactionStatusDetails(row.original.status).color
          )}
        >
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
