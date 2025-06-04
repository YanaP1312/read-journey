import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../helpers/api";
import axios from "axios";
import type {
  LoginCredentials,
  RefreshResponse,
  RegisterCredentials,
  User,
} from "../helpers/types/interfacesAuth";
import type { RootState } from "../store";

const setAuthHeader = (token: string) =>
  (api.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearAuthHeader = () => (api.defaults.headers.common.Authorization = "");

export const register = createAsyncThunk<
  User,
  RegisterCredentials,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post<User>("users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk<
  User,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post<User>("users/signin", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshTokens = createAsyncThunk<
  RefreshResponse,
  void,
  { rejectValue: string; state: RootState }
>("auth/refreshTokens", async (_, thunkAPI) => {
  const { refreshToken } = thunkAPI.getState().auth.user;
  if (!refreshToken)
    return thunkAPI.rejectWithValue("Don't have refresh token");

  try {
    setAuthHeader(refreshToken);
    const { data } = await api.get<RefreshResponse>("users/current/refresh");
    setAuthHeader(data.token);
    return data;
  } catch (error: any) {
    clearAuthHeader();
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string; state: RootState }
>("auth/getCurrentUser", async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth.user;
  if (!token) return thunkAPI.rejectWithValue("Token doesn't found");

  try {
    setAuthHeader(token);
    const { data } = await api.get<User>("users/current");
    return data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      try {
        const refreshData = await thunkAPI.dispatch(refreshTokens()).unwrap();
        const { data } = await api.get<User>("users/current");
        return {
          ...data,
          token: refreshData.token,
          refreshToken: refreshData.refreshToken,
        };
      } catch {
        return thunkAPI.rejectWithValue(
          "Unable to refresh session. Please sign in again."
        );
      }
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await api.post("users/signout");
      clearAuthHeader();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
