import { TransactionStatus } from "@/api/orders/types";

export const getTransactionStatusDetails = (
  status?: string
): {
  head: string;
  foot: string;
  color: string;
  bgColor: string;
} => {
  switch (status) {
    case TransactionStatus.WAITING:
      return {
        head: "Please don't leave this page until payment has been done.",
        foot: "Please wait until the order has been confirmed. Make sure to refresh the status.",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
      };
    case TransactionStatus.UNPAID:
      return {
        head: "Please don't leave this page until payment has been done.",
        foot: "Order has been confirmed. Please do the payment on cashier.",
        color: "text-red-500",
        bgColor: "bg-red-50",
      };
    case TransactionStatus.PAID:
      return {
        head: "Order Success",
        foot: "This order has been recorded. Have a good meal.",
        color: "text-success-500",
        bgColor: "bg-success-100",
      };
    case TransactionStatus.cancelled:
      return {
        head: "Order Success",
        foot: "This order has been recorded. Have a good meal.",
        color: "text-zinc-500",
        bgColor: "bg-zinc-50",
      };
    default:
      return getTransactionStatusDetails(TransactionStatus.WAITING);
  }
};
