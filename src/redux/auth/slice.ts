import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { AuthState } from "../helpers/types/interfacesAuth";
import {
  getCurrentUser,
  login,
  logout,
  refreshTokens,
  register,
} from "./operations";

const initialState: AuthState = {
  user: { _id: null, name: null, email: null, token: null, refreshToken: null },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logout.fulfilled, () => {
        return initialState;
      })

      .addCase(refreshTokens.fulfilled, (state, { payload }) => {
        state.user.token = payload.token;
        state.user.refreshToken = payload.refreshToken;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        (state) => {
          state.isLoggedIn = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        (state, { payload }) => {
          state.error = payload?.message || "Unknown error";
        }
      )
      .addMatcher(
        isAnyOf(refreshTokens.pending, getCurrentUser.pending),
        (state) => {
          state.isRefreshing = true;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(refreshTokens.rejected, getCurrentUser.rejected),
        (state, { payload }) => {
          state.isRefreshing = false;
          state.isLoggedIn = false;
          state.error = payload?.message ?? "Unknown error";
        }
      ),
});

export const authReducer = authSlice.reducer;
