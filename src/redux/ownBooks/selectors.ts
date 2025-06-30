// const initialState: OwnBooksState = {
//   books: [],
//   isLoading: false,
//   error: null,
// };

import type { RootState } from "../store";

export const selectBooks = (state: RootState) => state.ownBooks.books;
export const selectIsLoading = (state: RootState) => state.ownBooks.isLoading;
export const selectError = (state: RootState) => state.ownBooks.error;
