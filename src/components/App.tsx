import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "../redux/helpers/hooks";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { lazy, useEffect } from "react";
import { getCurrentUser } from "../redux/auth/operations";
import RestrictedRoute from "./RestrictedRoute";
import Layout from "./Layuot";
import PrivateRoute from "./PrivateRoute";
import LazyWrapper from "../redux/helpers/utils/LazyWrapper";
import { store } from "../redux/store";
import Loader from "./Loader/Loader";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const RecommendedPage = lazy(
  () => import("../pages/RecommendedPage/RecommendedPage")
);
const MyLibraryPage = lazy(
  () => import("../pages/MyLibraryPage/MyLibraryPage")
);
const ReadingPage = lazy(() => import("../pages/ReadingPage/ReadingPage"));

function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    const token = store.getState().auth.user.token;
    if (token) dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/register"
        element={
          <LazyWrapper>
            <RestrictedRoute
              component={<MainPage />}
              redirectTo="/recommended"
            />
          </LazyWrapper>
        }
      />
      <Route
        path="/login"
        element={
          <LazyWrapper>
            <RestrictedRoute
              component={<MainPage />}
              redirectTo="/recommended"
            />
          </LazyWrapper>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="/recommended" />} />
        <Route
          path="recommended"
          element={
            <LazyWrapper>
              <RecommendedPage />
            </LazyWrapper>
          }
        />
        <Route
          path="library"
          element={
            <LazyWrapper>
              <MyLibraryPage />
            </LazyWrapper>
          }
        />
        <Route
          path="reading"
          element={
            <LazyWrapper>
              <ReadingPage />
            </LazyWrapper>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
