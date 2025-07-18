import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { OwnBooksState } from "../helpers/types/interfacesBook";
import {
  addBookFromRecom,
  addOwnBook,
  deleteOwnBook,
  getOwnBooks,
} from "./operations";
import { logout } from "../auth/operations";

const initialState: OwnBooksState = {
  books: [],
  isLoading: false,
  error: null,
};

const ownBooksSlice = createSlice({
  name: "ownBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(getOwnBooks.fulfilled, (state, { payload }) => {
        state.books = payload;
      })
      .addCase(addOwnBook.fulfilled, (state, { payload }) => {
        state.books.push(payload);
      })
      .addCase(addBookFromRecom.fulfilled, (state, { payload }) => {
        state.books.push(payload);
      })
      .addCase(deleteOwnBook.fulfilled, (state, { payload }) => {
        state.books = state.books.filter((book) => book._id !== payload.id);
      })
      .addMatcher(
        isAnyOf(
          getOwnBooks.pending,
          addOwnBook.pending,
          addBookFromRecom.pending,
          deleteOwnBook.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getOwnBooks.fulfilled,
          addOwnBook.fulfilled,
          addBookFromRecom.fulfilled,
          deleteOwnBook.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getOwnBooks.rejected,
          addOwnBook.rejected,
          addBookFromRecom.rejected,
          deleteOwnBook.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload?.message ?? "Unknown error";
        }
      ),
});

export const ownBooksReducer = ownBooksSlice.reducer;
