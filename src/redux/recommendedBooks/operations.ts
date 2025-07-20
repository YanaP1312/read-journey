import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  RecommendedBooks,
  paramsForRecom,
} from "../helpers/types/interfacesBook";
import { api } from "../helpers/api";
import { handleAxiosError } from "../helpers/functions/handlerAxiosError";

export const getRecommended = createAsyncThunk<
  RecommendedBooks,
  paramsForRecom,
  { rejectValue: { message: string; status: number } }
>("recommendedBooks/getRecommended", async (params, thunkAPI) => {
  try {
    const { data } = await api.get<RecommendedBooks>("books/recommend", {
      params,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});
