import { useAuth } from "@/api/auth";
import { FunctionComponent, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export const AuthGuard: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { data: auth, isLoading } = useAuth();
  const navigate = useNavigate();

  if (!isLoading && !auth?.isAuthenticated) {
    navigate("/login");
    return null;
  }
  return children;
};
