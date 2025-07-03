import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  OwnBookInfo,
  ReadingPayload,
} from "../helpers/types/interfacesBook";
import { handleAxiosError } from "../helpers/functions/handlerAxiosError";
import { api } from "../helpers/api";

export const getOwnBookInfo = createAsyncThunk<
  OwnBookInfo,
  string,
  { rejectValue: { message: string; status: number } }
>("ownBookInfo/getOwnBookInfo", async (id, thunkAPI) => {
  try {
    const { data } = await api.get(`/books/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const readingStart = createAsyncThunk<
  OwnBookInfo,
  ReadingPayload,
  { rejectValue: { message: string; status: number } }
>("ownBookInfo/readingStart", async (body, thunkAPI) => {
  try {
    const { data } = await api.post("/books/reading/start", body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const readingFinish = createAsyncThunk<
  OwnBookInfo,
  ReadingPayload,
  { rejectValue: { message: string; status: number } }
>("ownBookInfo/readingFinish", async (body, thunkAPI) => {
  try {
    const { data } = await api.post("/books/reading/finish", body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const deleteReadingBook = createAsyncThunk<
  OwnBookInfo,
  { bookId: string; readingId: string },
  { rejectValue: { message: string; status: number } }
>("ownBookInfo/deleteReadingBook", async ({ bookId, readingId }, thunkAPI) => {
  try {
    const { data } = await api.delete("/books/reading", {
      params: { bookId, readingId },
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});
