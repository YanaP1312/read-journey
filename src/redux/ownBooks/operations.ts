import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  AddBookPayload,
  BookStatus,
  OwnBook,
  OwnBooks,
} from "../helpers/types/interfacesBook";
import { handleAxiosError } from "../helpers/functions/handlerAxiosError";
import { api } from "../helpers/api";

export const getOwnBooks = createAsyncThunk<
  OwnBooks,
  BookStatus | undefined,
  { rejectValue: { message: string; status: number } }
>("ownBooks/getOwnBooks", async (status, thunkAPI) => {
  try {
    const params = status ? { status } : {};
    const { data } = await api.get("books/own", { params });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const addOwnBook = createAsyncThunk<
  OwnBook,
  AddBookPayload,
  { rejectValue: { message: string; status: number } }
>("ownBooks/addOwnBook", async (body, thunkAPI) => {
  try {
    const { data } = await api.post("books/add", body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const addBookFromRecom = createAsyncThunk<
  OwnBook,
  string,
  { rejectValue: { message: string; status: number } }
>("ownBooks/addBookFromRecom", async (id, thunkAPI) => {
  try {
    const { data } = await api.post(`books/add/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const deleteOwnBook = createAsyncThunk<
  { message: string; id: string },
  string,
  { rejectValue: { message: string; status: number } }
>("ownBooks/deleteOwnBook", async (id, thunkAPI) => {
  try {
    const { data } = await api.delete(`books/remove/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});
