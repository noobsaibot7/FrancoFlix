import React, { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const useMovieFetch = movieId => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const movieEndpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    const credit = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    try {
      const fetchedMovie = await (await fetch(movieEndpoint)).json();
      const fetchedCredit = await (await fetch(credit)).json();
      const directors = fetchedCredit.crew.filter(
        crew => crew.job === "Director"
      );
      setMovie({
        ...fetchedMovie,
        actors: fetchedCredit.cast,
        directors
      });
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    if (
      [movieId] in localStorage &&
      JSON.parse(localStorage[movieId]).length > 0
    ) {
      setMovie(JSON.parse(localStorage[movieId]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, movieId]);

  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(movie));
  }, [movieId, movie]);

  return [movie, error, loading];
};
