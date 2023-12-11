import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type TableNumberProps = {
  tableNumber: number;
  merchantId: string;
  assignTable: (tableNumber: number, merchantId: string) => void;
};

const TableNumberContext = createContext<TableNumberProps | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useTableNumber = () => {
  const context = useContext(TableNumberContext);
  if (!context) {
    throw new Error("useTableNumber must be used within a TableNumberProvider");
  }
  return context;
};

export const TableNumberProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [tableNumber, setTableNumber] = useState<number>(0);
  const [merchantId, setMerchantId] = useState("");

  const assignTable = (tableNumber: number, merchantId: string) => {
    setTableNumber(tableNumber);
    setMerchantId(merchantId);
  };

  useEffect(() => {
    const tableNumber = localStorage.getItem("tableNumber");
    const merchantId = localStorage.getItem("merchantId");

    if (tableNumber && merchantId) {
      setTableNumber(parseInt(tableNumber));
      setMerchantId(merchantId);
    }
  }, []);

  return (
    <TableNumberContext.Provider
      value={{ tableNumber, merchantId, assignTable }}
    >
      {children}
    </TableNumberContext.Provider>
  );
};
