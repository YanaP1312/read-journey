import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
  user: { id: null, name: null, email: null },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // extraReducers: (builder) => builder.addCase().addMatcher(isAnyOf)
});

export const authReducer = authSlice.reducer;
