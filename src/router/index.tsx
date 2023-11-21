import { RouteObject, createHashRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register/register";
import { CartPage } from "../pages/cart";
import { OrderPage } from "../pages/order";

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
  cart: {
    path: "/cart",
    element: <CartPage />,
  },
  order: {
    path: "/order",
    element: <OrderPage />,
  },
};

export const router = createHashRouter([
  routes.home,
  routes.register,
  routes.login,
  routes.cart,
  routes.order,
]);
