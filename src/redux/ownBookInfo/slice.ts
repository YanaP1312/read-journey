import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { OwnBookInfoState } from "../helpers/types/interfacesBook";
import {
  deleteReadingBook,
  getOwnBookInfo,
  readingFinish,
  readingStart,
} from "./operations";

const initialState: OwnBookInfoState = {
  book: null,
  isLoading: false,
  error: null,
};

const ownBookInfoSlice = createSlice({
  name: "onwBookInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        isAnyOf(
          getOwnBookInfo.pending,
          readingStart.pending,
          readingFinish.pending,
          deleteReadingBook.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getOwnBookInfo.fulfilled,
          readingStart.fulfilled,
          readingFinish.fulfilled,
          deleteReadingBook.fulfilled
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.book = payload;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getOwnBookInfo.rejected,
          readingStart.rejected,
          readingFinish.rejected,
          deleteReadingBook.rejected
        ),
        (state, { payload }) => {
          state.isLoading = true;
          state.error = payload?.message ?? "Unknown error";
        }
      ),
});

export const ownBookInfoReducer = ownBookInfoSlice.reducer;
