import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import genresReducer from "./geners";
import watcherSaga from "../saga";
import moviesReducers from "./movies";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    search: searchReducer,
    genres: genresReducer,
    movies: moviesReducers,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ think: false }).prepend(sagaMiddleware);
  },
});

sagaMiddleware.run(watcherSaga);
export default store;
