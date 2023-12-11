import { createHashRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { SignUpPage } from "../pages/signup";
import { CartPage } from "../pages/cart";
import { OrdersPage } from "../pages/orders";
import { AuthLayout } from "../components/layout/AuthLayout";
import { ForgotPasswordPage } from "../pages/forgot-password";
import { NewPasswordPage } from "../pages/new-password";
import { PageLayout } from "@/components/layout/PageLayout";
import App from "@/App";
import { ProductsPage } from "@/pages/products";
import { ProductDetailPage } from "@/pages/products/ProductDetailPage";
import { NotificationsPage } from "@/pages/notifications";
import { RewardsPage } from "@/pages/rewards";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { AccountPage } from "@/pages/account";
import { OrderDetailPage } from "@/pages/orders/OrderDetailPage";
import { AssignTablePage } from "@/pages/assign-table";

const routes = {
  home: {
    path: "/",
    element: <HomePage />,
  },
  login: {
    path: "/login",
    element: <LoginPage />,
  },
  signup: {
    path: "/signup",
    element: <SignUpPage />,
  },
  forgotPassword: {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  newPassword: {
    path: "/new-password",
    element: <NewPasswordPage />,
  },
  account: {
    path: "/account",
    element: (
      <AuthGuard>
        <AccountPage />
      </AuthGuard>
    ),
  },
  assignTable: {
    path: "/assign-table",
    element: <AssignTablePage />,
  },
  cart: {
    path: "/cart",
    element: <CartPage />,
  },
  orders: {
    path: "/orders",
    element: <OrdersPage />,
  },
  orderDetail: {
    path: "/orders/:id",
    element: <OrderDetailPage />,
  },
  products: {
    path: "/products",
    element: <ProductsPage />,
  },
  productDetail: {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
  notifications: {
    path: "/notifications",
    element: <NotificationsPage />,
  },
  rewards: {
    path: "/rewards",
    element: <RewardsPage />,
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
          routes.signup,
          routes.forgotPassword,
          routes.newPassword,
        ],
      },
      {
        element: <PageLayout />,
        children: [
          routes.account,
          routes.assignTable,
          routes.home,
          routes.cart,
          routes.orders,
          routes.orderDetail,
          routes.products,
          routes.productDetail,
          routes.notifications,
          routes.rewards,
        ],
      },
    ],
  },
]);
