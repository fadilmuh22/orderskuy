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
import { FoodsPage } from "@/pages/foods";
import { FoodDetailPage } from "@/pages/foods/FoodDetail";
import { NotificationsPage } from "@/pages/notifications";
import { RewardsPage } from "@/pages/rewards";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { AccountPage } from "@/pages/account";

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
  cart: {
    path: "/cart",
    element: <CartPage />,
  },
  order: {
    path: "/orders",
    element: <OrdersPage />,
  },
  foods: {
    path: "/foods",
    element: <FoodsPage />,
  },
  foodDetail: {
    path: "/foods/:id",
    element: <FoodDetailPage />,
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
          routes.home,
          routes.cart,
          routes.order,
          routes.foods,
          routes.foodDetail,
          routes.notifications,
          routes.rewards,
        ],
      },
    ],
  },
]);
