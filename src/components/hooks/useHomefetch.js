import React, { useState, useEffect } from "react";
import {POPULAR_BASE_URL } from "../../config";

export const useHomeFetch = searchVal => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    const loadMore = endpoint.search('page')

    try {
      const result = await (await fetch(endpoint)).json();
      setState(prev => ({
        ...prev,
        movies: loadMore !== -1 ? [...prev.movies, ...result.results] : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
      
    } catch (e) {
      setError(true);
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  }; 



  useEffect(() => {
    if('homeFetchState' in localStorage){
      setState(JSON.parse(sessionStorage.homeFetchState))
      setLoading(false)
    }else{
      fetchMovies(POPULAR_BASE_URL);
    }
    
  }, []);

  useEffect(()=>{
    if(!searchVal){
      sessionStorage.setItem('homeFetchState', JSON.stringify(state))
    }
    
  }, [searchVal, state])

  return [{state, loading, error}, fetchMovies];
};
