import { createSlice } from "@reduxjs/toolkit";

const courseFilterSlice = createSlice({
  name: "masterFilter",
  initialState: {
    python: "",
    design: "",
    react: "",
    main: "",
    courseElse: true,
  },

  reducers: {
    onPythonChange: (state, action) => {
      state.python = action.payload;
    },
    onDesignChange: (state, action) => {
      state.design = action.payload;
    },
    onReactChange: (state, action) => {
      state.react = action.payload;
    },
    onMainChange: (state, action) => {
      state.main = action.payload;
    },
    onCourseElseChange: (state, action) => {
      state.courseElse = action.payload;
    },
  },
});

export const {
  onPythonChange,
  onDesignChange,
  onReactChange,
  onMainChange,
  onCourseElseChange,
} = courseFilterSlice.actions;

export default courseFilterSlice.reducer;
