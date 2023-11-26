import { configureStore } from "@reduxjs/toolkit";

import search from "./search";
import sort from "./sort";
import courses from "./course";
import masterFilter from "./Filter/masterFilter";
import priceFilter from "./Filter/priceFilter";
import courseFilter from "./Filter/courseFilter";
import trigger from "./Filter/trigger";
import token from "./token";

const store = configureStore({
  reducer: {
    courses,
    search,
    sort,
    masterFilter,
    priceFilter,
    courseFilter,
    token,
    trigger,
  },
});

export default store;
