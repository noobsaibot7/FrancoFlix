import React, { useState } from "react";
import {
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POPULAR_BASE_URL,
  SEARCH_BASE_URL
} from "../config";

import HeroImage from "./elements/HeroImage";
import Searchbar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import Spinner from "./elements/Spinner";
import LoadMoreBtn from "./elements/LoadMoreBtn";

import { useHomeFetch } from "./hooks/useHomefetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  
  const [searchVal, setSearchVal] = useState("");
  const [
    {
      state: { heroImage, movies, currentPage, totalPages },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch(searchVal);

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
    setSearchVal(search);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndPoint = `${SEARCH_BASE_URL}${searchVal}&page=${currentPage +
      1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchVal ? searchEndPoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  if (error) return <div>Something went wrong</div>;
  if (!movies[0]) return <Spinner />;

  return (
    <>
      {!searchVal && <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />}
      <Searchbar callback={searchMovies} />
      <Grid header={searchVal ? "Search results" : "Popular Movies"}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
