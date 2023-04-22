import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie, resetState } from "../redux/movie";
import Loader from "../components/Loader";
import Movie from "../components/Movie";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams;
  const { movie } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getMovie(id ? parseInt(id, 10) : 0));

    return () => {
      dispatch(resetState());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (id !== movie.id?.toString()) {
      dispatch(getMovie(id ? parseInt(id, 10) : 0));
    }
  }, [id, movie.id, dispatch]);

  return "Hello";
};

export default MovieDetails;
