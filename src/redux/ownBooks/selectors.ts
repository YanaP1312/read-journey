import type { RootState } from "../store";

export const selectAllBooks = (state: RootState) => state.ownBooks.allBooks;
export const selectFilteredBooks = (state: RootState) =>
  state.ownBooks.filteredBooks;
export const selectCurrentStatus = (state: RootState) =>
  state.ownBooks.currentStatus;
export const selectIsLoading = (state: RootState) => state.ownBooks.isLoading;
export const selectError = (state: RootState) => state.ownBooks.error;
