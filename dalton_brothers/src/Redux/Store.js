import { configureStore } from "@reduxjs/toolkit";

import search from "./search";
import sort from "./sort";
import courses from "./reservedCourse";
import masterFilter from "./Filter/masterFilter";
import priceFilter from "./Filter/priceFilter";
import courseFilter from "./Filter/courseFilter";
import trigger from "./Filter/trigger";
import token from "./token";
import money from "./money";
import theme from "./Theme";

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
    money,
    theme,
    
  },
});

export default store;
