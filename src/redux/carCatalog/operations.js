import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const carRentMockApi = axios.create({
  baseURL: "https://66c781ee732bf1b79fa6c47e.mockapi.io/car/rental/",
  params: { page: 1, limit: 12 },
});

export const fetchCarsThunk = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const { data } = await carRentMockApi.get("CarRentalApp");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchMoreCarsThunk = createAsyncThunk(
  "cars/fetchMore",
  async (page, thunkAPI) => {
    try {
      const { data } = await carRentMockApi.get("CarRentalApp", {
        params: { page },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
