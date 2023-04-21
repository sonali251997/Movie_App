import React from "react";
import Suggestion from "../components/Suggestion";
import { useSelector } from "react-redux";

const SearchMovieSuggestion = () => {
  const { search } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);

  return <Suggestion movies={search} genres={genres} />;
};

export default SearchMovieSuggestion;
