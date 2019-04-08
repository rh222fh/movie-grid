import React from 'react';
import { initialState, reducer } from './state';

const useMovieSearch = () => {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { searchInput, searchResult, savedMovies } = state;

  const handleMovieSearch = e => {
    dispatch({ type: 'setSearchInput', payload: e.target.value });
  };

  React.useEffect(() => {
    if (searchInput === '') {
      return;
    }
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(payload =>
        dispatch({ type: 'setSearchResult', payload: payload.results })
      )
      .catch(error => console.log(error));
  }, [searchInput]);

  return {
    handleMovieSearch,
    state: {
      ...state,
      searchInput,
      searchResult,
      savedMovies,
    },
  };
};

export default useMovieSearch;
