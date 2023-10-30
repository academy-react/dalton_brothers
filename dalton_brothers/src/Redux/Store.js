import { configureStore } from "@reduxjs/toolkit";

import search from "./search";
import sort from "./sort";
import masterFilter from "./Filter/masterFilter";
import priceFilter from "./Filter/priceFilter";
import courseFilter from "./Filter/courseFilter";
import token from "./token";

const store = configureStore({
  reducer: {
    search,
    sort,
    masterFilter,
    priceFilter,
    courseFilter,
    token,
  },
});

export default store;
