import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: [],

  reducers: {
    onAllCourseChange: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { onAllCourseChange } = courseSlice.actions;

export default courseSlice.reducer;
