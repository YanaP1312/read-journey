import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useAppSelector } from "../redux/helpers/hooks";
import type { JSX } from "react";

interface RestrictedRouteProps {
  component: JSX.Element;
  redirectTo?: string;
}

const RestrictedRoute = ({
  component,
  redirectTo = "/recommended",
}: RestrictedRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
