import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: { token: true },

  reducers: {
    onTokenChange: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { onTokenChange } = tokenSlice.actions;

export default tokenSlice.reducer;
