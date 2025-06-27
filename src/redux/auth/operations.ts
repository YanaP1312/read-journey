import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../helpers/api";
import type {
  AuthState,
  LoginCredentials,
  RefreshResponse,
  RegisterCredentials,
  User,
} from "../helpers/types/interfacesAuth";
import { handleAxiosError } from "../helpers/functions/handlerAxiosError";

const setAuthHeader = (token: string) =>
  (api.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearAuthHeader = () => (api.defaults.headers.common.Authorization = "");

export const register = createAsyncThunk<
  User,
  RegisterCredentials,
  { rejectValue: { message: string; status: number } }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post<User>("users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const login = createAsyncThunk<
  User,
  LoginCredentials,
  { rejectValue: { message: string; status: number } }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post<User>("users/signin", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const refreshTokens = createAsyncThunk<
  RefreshResponse,
  void,
  {
    rejectValue: { message: string; status: number };
    state: { auth: AuthState };
  }
>("auth/refreshTokens", async (_, thunkAPI) => {
  const { refreshToken } = thunkAPI.getState().auth.user;
  if (!refreshToken)
    return thunkAPI.rejectWithValue({
      message: "Don't have refresh token",
      status: 401,
    });

  try {
    setAuthHeader(refreshToken);
    const { data } = await api.get<RefreshResponse>("users/current/refresh");
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    clearAuthHeader();
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const getCurrentUser = createAsyncThunk<
  User,
  void,
  {
    rejectValue: { message: string; status: number };
    state: { auth: AuthState };
  }
>("auth/getCurrentUser", async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth.user;
  if (!token)
    return thunkAPI.rejectWithValue({
      message: "Token doesn't found",
      status: 401,
    });

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
        return thunkAPI.rejectWithValue({
          message: "Unable to refresh session. Please sign in again.",
          status: 401,
        });
      }
    }

    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: { message: string; status: number } }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("users/signout");
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});
