import { useCarts, useDeleteCart } from "@/api/cart";
import { CartProduct } from "@/api/cart/types";
import { useOrderFromCart } from "@/api/orders";
import { IconProvider } from "@/components/common/IconProvider";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Table } from "@/components/common/Table";
import { Button, Card, Divider } from "@nextui-org/react";
import { ColumnDef } from "@tanstack/react-table";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CartPage = () => {
  const navigate = useNavigate();

  const { data: carts, isLoading: isCartLoading } = useCarts();
  const { mutateAsync: orderFromCart, isPending: isOrderPending } =
    useOrderFromCart({
      onSuccess: (data) => {
        toast.success("Order created successfully");
        navigate(`/orders/${data.transaction.id}`);
      },
    });
  const { mutateAsync: deleteCart, isPending: isDeleteCartPending } =
    useDeleteCart({
      onSuccess: () => {
        toast.success("Cart deleted successfully");
      },
    });

  const columns: ColumnDef<CartProduct>[] = [
    {
      header: "Item",
      cell: ({ row }) => (
        <p className="text-xs font-bold">{row.original.product?.name}</p>
      ),
    },
    {
      header: "Qty",
      accessorFn: (row) => row.qty,
    },
    {
      header: "Pts",
      accessorFn: (row) => row.product?.point,
    },
    {
      header: "Price",
      accessorFn: (row) =>
        `Rp ${parseInt(row.product?.price ?? "0").toLocaleString()}`,
    },
    {
      header: "Del",
      cell: (props) => (
        <Button
          key={props.row.original.id}
          onClick={async () => {
            await deleteCart({ cart_id: props.row.original.id });
          }}
          isLoading={isDeleteCartPending}
          variant="flat"
          color="danger"
          isIconOnly
        >
          <IconProvider className="fill-danger-500" size="24">
            <FaRegTrashAlt />
          </IconProvider>
        </Button>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-6 p-4">
      <SectionHeader title="My" subtitle="Cart" />

      <div className="sm:w-[100vw] overflow-hidden">
        <Table<CartProduct> data={carts?.items ?? []} columns={columns} />
      </div>

      {isCartLoading && <>Loading...</>}

      {carts?.items.length !== 0 && (
        <Card className="flex flex-col gap-4 px-4 py-6 text-xs" shadow="sm">
          <div>
            <p className="font-bold">Pricing</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Total items</p>
            <p>{carts?.items[0].qty}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Subtotal</p>
            <p>
              Rp {parseInt(carts?.items[0].subtotal ?? "0").toLocaleString()}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Tax</p>
            <p>Rp {parseInt(carts?.items[0].tax ?? "0").toLocaleString()}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-emerald-500">Total price</p>
            <p>Rp {parseInt(carts?.items[0].total ?? "0").toLocaleString()}</p>
          </div>
          <Divider />

          <div className="flex flex-row justify-between">
            <p className="font-bold">Point(s) From Order</p>
            <p>Rp {carts?.items[0].product?.point}</p>
          </div>

          <Divider />

          <Button
            onClick={async () => {
              await orderFromCart({ table_number: carts?.items[0].id ?? 0 });
            }}
            isLoading={isOrderPending}
            isDisabled={isCartLoading}
            color="success"
            variant="shadow"
          >
            Order Now
          </Button>
        </Card>
      )}

      <div></div>
      <div></div>
    </div>
  );
};
