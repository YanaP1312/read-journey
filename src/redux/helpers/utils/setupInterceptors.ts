import { toast } from "react-toastify";
import { logout, refreshTokens } from "../../auth/operations";
import { store } from "../../store";
import { api } from "../api";
import { setAuthHeader } from "./authApiHelpers";

export const setupInterceptors = () => {
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshData = await store.dispatch(refreshTokens()).unwrap();
          setAuthHeader(refreshData.token);
          return api(originalRequest);
        } catch (err) {
            store.dispatch(logout());
            toast.error("Session expired, please log in again");
            return Promise.reject(err);
          }
      }

      return Promise.reject(error);
    }
  );
};
