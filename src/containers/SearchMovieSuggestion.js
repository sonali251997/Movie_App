import React from "react";
import Suggestion from "../components/Suggestion";
import { useSelector } from "react-redux";

const SearchMovieSuggestion = () => {
  const { search } = useSelector((store) => store);

  console.log(search.isFetching);
  return <Suggestion />;
};

export default SearchMovieSuggestion;
