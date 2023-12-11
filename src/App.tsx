import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { TableNumberProvider } from "./providers/TableNumberProvider";

const queryClient = new QueryClient();

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <QueryClientProvider client={queryClient}>
        <TableNumberProvider>
          <Outlet />
          <ToastContainer />
        </TableNumberProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default App;
