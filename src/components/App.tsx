import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "../redux/helpers/hooks";
import { selectIsLoggedIn, selectIsRefreshing, selectUser} from "../redux/auth/selectors";
import { lazy, useEffect } from "react";
import { getCurrentUser } from "../redux/auth/operations";
import RestrictedRoute from "./RestrictedRoute";
import Layout from "./Layuot";
import PrivateRoute from "./PrivateRoute";
import LazyWrapper from "../redux/helpers/utils/LazyWrapper";
import Loader from "./Loader/Loader";
import { getOwnBooks } from "../redux/ownBooks/operations";
import { setupInterceptors } from "../redux/helpers/utils/setupInterceptors";




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
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const user = useAppSelector(selectUser)
  const token = user.token;

useEffect(() => {
  setupInterceptors();
}, []);

useEffect(() => {
  if (token) {
    dispatch(getCurrentUser());
  }
}, [dispatch, token]);

useEffect(() => {
  if(isLoggedIn){
    dispatch(getOwnBooks());
  }
}, [dispatch, isLoggedIn]);

if(token && isRefreshing){
  return <Loader/>;
}

  return (
    <Routes>
      <Route
        path="/register"
        element={
          <LazyWrapper>
            <RestrictedRoute
              component={<MainPage />}
              redirectTo="/recommended/1"
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
              redirectTo="/recommended/1"
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
<Route index element={<Navigate to="/recommended/1" />} />

<Route path="recommended" element={<Navigate to="/recommended/1" />} />


        <Route
          path="recommended/:page"
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
  path="library/:status"
  element={
    <LazyWrapper>
      <MyLibraryPage />
    </LazyWrapper>
  }
/>
        <Route
          path="reading/:bookId"
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
