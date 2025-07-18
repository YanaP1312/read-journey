import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "../redux/helpers/hooks";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { useEffect } from "react";
import { getCurrentUser } from "../redux/auth/operations";
import RestrictedRoute from "./RestrictedRoute";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";
import Layout from "./Layuot";
import PrivateRoute from "./PrivateRoute";
import RecommendedPage from "../pages/RecommendedPage/RecommendedPage";
import MyLibraryPage from "../pages/MyLibraryPage/MyLibraryPage";
import ReadingPage from "../pages/ReadingPage/ReadingPage";

function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route
        path="/login"
        element={
          <RestrictedRoute
            component={<LoginForm />}
            redirectTo="/recommended"
          />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute
            component={<RegisterForm />}
            redirectTo="/recommended"
          />
        }
      />
      <Route path="/" element={<Layout />}>
        <Route
          path="recommended"
          element={
            <PrivateRoute>
              <RecommendedPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/library"
          element={
            <PrivateRoute>
              <MyLibraryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reading"
          element={
            <PrivateRoute>
              <ReadingPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
