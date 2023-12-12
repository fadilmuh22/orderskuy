import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TableNumberProvider } from "./providers/TableNumberProvider";

import "react-toastify/dist/ReactToastify.css";
import { MobileLayout } from "./components/layout/MobileLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={googleClientId}>
          <TableNumberProvider>
            <MobileLayout>
              <Outlet />
              <ToastContainer />
            </MobileLayout>
          </TableNumberProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default App;
