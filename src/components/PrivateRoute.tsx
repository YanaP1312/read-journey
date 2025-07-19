import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useAppSelector } from "../redux/helpers/hooks";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const PrivateRoute = ({
  children,
  redirectTo = "/login",
}: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
