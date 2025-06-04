import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { AuthState } from "../helpers/types/interfacesAuth";

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
  // extraReducers: (builder) => builder.addCase().addMatcher(isAnyOf())
});

export const authReducer = authSlice.reducer;
