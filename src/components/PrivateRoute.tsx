import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "../redux/auth/selectors";
import { useAppSelector } from "../redux/helpers/hooks";
import type { ReactNode } from "react";
import Loader from "./Loader/Loader";

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const PrivateRoute = ({
  children,
  redirectTo = "/login",
}: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const user = useAppSelector(selectUser);
  const token = user.token;

  if (token && (isRefreshing || !isLoggedIn)) {
    return <Loader/>;
  }
  
  

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
