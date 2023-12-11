import { useTableNumber } from "@/providers/TableNumberProvider";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export const AssignTablePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { assignTable } = useTableNumber();

  const tableNumber = searchParams.get("tableNumber");
  const merchantId = searchParams.get("merchantId");

  useEffect(() => {
    if (tableNumber && merchantId) {
      localStorage.setItem("tableNumber", tableNumber);
      localStorage.setItem("merchantId", merchantId);

      assignTable(parseInt(tableNumber), merchantId);

      toast.success("Table assigned successfully");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Assign Table</h1>
      <p className="text-sm text-gray-500">Table Number: {tableNumber}</p>
      <p className="text-sm text-gray-500">Merchant ID: {merchantId}</p>
    </div>
  );
};
