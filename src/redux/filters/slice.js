import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  filteredCatalog: [],
  make: null,
  price: null,
  mileage: { mileageFrom: 0, mileageTo: 0 },
};

const filteredSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilteredCars: (state, action) => {
      state.filteredCatalog = [...action.payload];
      action.payload.length
        ? toast.success(`${action.payload.length} results`)
        : toast.error("No result");
    },
    filterMake: (state, action) => {
      state.make = action.payload;
    },
    filterPrice: (state, action) => {
      state.price = action.payload;
    },
    filterMileage: (state, action) => {
      state.mileage = action.payload;
    },
    filterMileageFrom: (state, action) => {
      state.mileage.mileageFrom = action.payload;
    },
    filterMileageTo: (state, action) => {
      state.mileage.mileageTo = action.payload;
    },
    resetFilter: (state) => {
      state.filteredCatalog = [];
      state.make = null;
      state.price = null;
      state.mileage = {
        mileageFrom: 0,
        mileageTo: 0,
      };
    },
  },
});

export const {
  addFilteredCars,
  filterMake,
  filterPrice,
  filterMileage,
  resetFilter,
  filterMileageFrom,
  filterMileageTo,
} = filteredSlice.actions;
export const filterReducer = filteredSlice.reducer;
