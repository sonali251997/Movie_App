import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
  totalResults: 0,
  page: 0,
  totalPage: 0,
  isFetching: false,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: initialState,
  reducers: {
    searchMovies: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchedSearchMovies: (state, action) => {
      return {
        ...state,
        isFetching: false,
        results: action.payload.results,
        totalResults: action.payload.total_results,
        page: action.payload.page,
        totalPage: action.payload.total_page,
      };
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { searchMovies, fetchedSearchMovies, resetState } =
  searchSlice.actions;

export default searchSlice.reducer;
