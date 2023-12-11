import { useOrder } from "@/api/orders";
import { IconProvider } from "@/components/common/IconProvider";
import { SectionHeader } from "@/components/common/SectionHeader";
import { getTransactionStatusDetails } from "@/utils";
import { Button, Card, Divider } from "@nextui-org/react";
import classNames from "classnames";
import { FaSyncAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

export const OrderDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const {
    data: order,
    isLoading: isOrderLoading,
    isFetching,
    refetch,
  } = useOrder(parseInt(id));

  return (
    <div className="flex flex-col gap-6 p-4">
      <SectionHeader title="Order" subtitle="Details" />

      {isOrderLoading && <>Loading...</>}

      <div className="p-2 text-xs text-center rounded-lg bg-amber-50 text-amber-500">
        {getTransactionStatusDetails(order?.status).head}
      </div>

      {order && (
        <Card className="flex flex-col gap-4 px-4 py-6 text-xs" shadow="sm">
          <div>
            <p className="font-bold">Info</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Invoice</p>
            <p>{order.trx_code}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Table Number</p>
            <p>{order.table_number}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Orderer Name</p>
            <p>John Doe</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-emerald-500">Total price</p>
            <p>Rp {parseInt(order.total ?? "0").toLocaleString()}</p>
          </div>
          <Divider />

          <div>
            <p className="font-bold">Status</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-bold">Order Confirmation</p>
            <p
              className={classNames(
                "capitalize",
                getTransactionStatusDetails(order.status).color
              )}
            >
              {order.status}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-bold">Payment</p>
            <p className="capitalize">{order.payment_type}</p>
          </div>

          <Divider />

          <div className="p-2 rounded-lg bg-zinc-100">
            {getTransactionStatusDetails(order?.status).head}
          </div>

          <Button
            onClick={() => {
              refetch();
            }}
            isLoading={isFetching}
            isDisabled={isOrderLoading}
            color="primary"
            variant="shadow"
            startContent={
              !isFetching && (
                <IconProvider className="fill-white" size="24">
                  <FaSyncAlt />
                </IconProvider>
              )
            }
          >
            Refresh Status
          </Button>
        </Card>
      )}

      <div></div>
      <div></div>
    </div>
  );
};
