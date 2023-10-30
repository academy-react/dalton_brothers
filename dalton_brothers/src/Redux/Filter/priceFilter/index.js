import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: { minPrice: 250000, maxPrice: 5000000 },

  reducers: {
    onMinPriceChange: (state, action) => {
      state.minPrice = action.payload;
    },
    onMaxPriceChange: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { onMinPriceChange, onMaxPriceChange } = priceSlice.actions;

export default priceSlice.reducer;
