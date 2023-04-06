import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import watcherSaga from "../saga";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
