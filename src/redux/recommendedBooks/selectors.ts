import type { RootState } from "../store";

export const selectResult = (state: RootState) =>
  state.recommendedBooks.results;
export const selectTotalPages = (state: RootState) =>
  state.recommendedBooks.totalPages;
export const selectPage = (state: RootState) => state.recommendedBooks.page;
export const selectPerPage = (state: RootState) =>
  state.recommendedBooks.perPage;
export const selectIsLoading = (state: RootState) =>
  state.recommendedBooks.isLoading;
export const selectError = (state: RootState) => state.recommendedBooks.error;
