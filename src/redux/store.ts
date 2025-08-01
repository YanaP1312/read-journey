import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { recommendedBooksReducer } from "./recommendedBooks/slice";
import { ownBooksReducer } from "./ownBooks/slice";
import { ownBookInfoReducer } from "./ownBookInfo/slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    recommendedBooks: recommendedBooksReducer,
    ownBooks: ownBooksReducer,
    onwBookInfo: ownBookInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
