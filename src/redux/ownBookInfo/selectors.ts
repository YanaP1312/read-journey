import type { RootState } from "../store";

export const selectBook = (state: RootState) => state.onwBookInfo.book;
export const selectIsLoading = (state: RootState) =>
  state.onwBookInfo.isLoading;
export const selectError = (state: RootState) => state.onwBookInfo.error;
