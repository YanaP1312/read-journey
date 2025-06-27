import { createSlice } from "@reduxjs/toolkit";
import type { RecommendedBooksState } from "../helpers/types/interfacesBook";
import { getRecommended } from "./operations";

const initialState: RecommendedBooksState = {
  results: [],
  totalPages: 1,
  page: 1,
  perPage: 10,
  isLoading: false,
  error: null,
};

const recommendedBooksSlice = createSlice({
  name: "recommendedBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRecommended.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecommended.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.results = payload.results;
        state.totalPages = payload.totalPages;
        state.page = payload.page;
        state.error = null;
      })
      .addCase(getRecommended.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.message ?? "Unknown error";
      }),
});

export const recommendedBooksReducer = recommendedBooksSlice.reducer;
