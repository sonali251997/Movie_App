import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies, resetState } from "../redux/movies";

const PopularMovie = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getPopularMovies());

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  console.log("movies", movies);

  return <div>PopularMovie</div>;
};

export default PopularMovie;
