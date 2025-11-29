import { api } from "../api";


export const setAuthHeader = (token: string) =>
  (api.defaults.headers.common.Authorization = `Bearer ${token}`);

export const clearAuthHeader = () => (api.defaults.headers.common.Authorization = "");
