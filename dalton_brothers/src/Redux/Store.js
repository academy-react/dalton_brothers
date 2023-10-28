import { configureStore } from "@reduxjs/toolkit";

import search from "./search";
import sort from "./sort";
import masterFilter from "./Filter/masterFilter";
import courseFilter from "./Filter/courseFilter";

const store = configureStore({
  reducer: {
    search,
    sort,
    masterFilter,
    courseFilter,
  },
});

export default store;
