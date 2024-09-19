import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk, fetchMoreCarsThunk } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  hasMore: true,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        action.payload;
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchMoreCarsThunk.fulfilled, (state, action) => {
        action.payload;
        state.items = [...state.items, ...action.payload];
        state.loading = false;
        if (action.payload.length < 12) state.hasMore = false;
      })
      .addCase(fetchCarsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setHasMore } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
