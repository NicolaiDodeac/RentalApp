import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk, fetchMoreCarsThunk } from "./operations";

const initialState = {
  items: [],
  featuredCars: [],
  loading: false,
  error: null,
  hasMore: true,
  currentCard: null,
  isModalOpen: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },

    addCurrent: (state, action) => {
      document.body.style.overflow = "hidden";
      state.currentCard = action.payload;
      state.isModalOpen = true;
    },
    deleteCurrent: (state) => {
      document.body.style.overflow = "unset";
      state.currentCard = null;
      state.isModalOpen = false;
    },
    setFeaturedCars: (state, action) => {
      state.featuredCars = action.payload; // <-- Set featured cars
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

export const { setHasMore, addCurrent, setFeaturedCars, deleteCurrent } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
