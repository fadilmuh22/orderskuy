import { RouteObject, createHashRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { CartPage } from "../pages/cart";
import { OrdersPage } from "../pages/orders";
import { AuthLayout } from "../components/layout/AuthLayout";
import { ForgotPasswordPage } from "../pages/forgot-password";
import { NewPasswordPage } from "../pages/new-password";
import { PageLayout } from "@/components/layout/PageLayout";
import App from "@/App";

type Route = Record<string, RouteObject>;

const routes: Route = {
  home: {
    path: "/",
    element: <HomePage />,
  },
  register: {
    path: "/register",
    element: <RegisterPage />,
  },
  login: {
    path: "/login",
    element: <LoginPage />,
  },
  forgotPassword: {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  newPassword: {
    path: "/new-password",
    element: <NewPasswordPage />,
  },
  cart: {
    path: "/cart",
    element: <CartPage />,
  },
  order: {
    path: "/orders",
    element: <OrdersPage />,
  },
};

export const router = createHashRouter([
  {
    element: <App />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          routes.login,
          routes.register,
          routes.forgotPassword,
          routes.newPassword,
        ],
      },
      {
        element: <PageLayout />,
        children: [routes.home, routes.cart, routes.order],
      },
    ],
  },
]);
