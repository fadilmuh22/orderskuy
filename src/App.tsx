import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default App;
