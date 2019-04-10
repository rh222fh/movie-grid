import React from 'react';
import { initialState, reducer } from './state';

const useMovieSearch = () => {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const {
    searchInput,
    searchResult,
    savedMovies,
    watchLater,
    isModalOpen,
  } = state;
  const containsResults = !!searchResult > 0;

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
      .then(payload => {
        let result = payload.results.map(movie => ({
          ...savedMovies.find(later => movie.id === later.id),
          ...watchLater.find(later => movie.id === later.id),
          ...movie,
        }));

        dispatch({ type: 'setSearchResult', payload: result });
      })
      .catch(error => console.log(error));
  }, [searchInput, savedMovies, watchLater]);

  const handleFavoriteMovie = data => {
    let movie = {
      id: data.id,
      favorite: true,
    };

    if (savedMovies.find(m => m.id === data.id)) {
      dispatch({ type: 'removeFavorite', payload: movie });
    } else {
      dispatch({ type: 'addFavorite', payload: movie });
    }
  };

  const handleWatchLater = data => {
    let movie = {
      id: data.id,
      watchLater: true,
    };

    if (watchLater.find(m => m.id === data.id)) {
      dispatch({ type: 'removeWatchLater', payload: movie });
    } else {
      dispatch({ type: 'addWatchLater', payload: movie });
    }
  };

  /* const handleModalOpen = data => {
    dispatch({ type: 'setIsModalOpen', payload: true });
  };

  const handleModalClose = data => {
    dispatch({ type: 'setIsModalOpen', payload: false });
  }; */

  return {
    handleMovieSearch,
    handleFavoriteMovie,
    handleWatchLater,
    state: {
      ...state,
      searchInput,
      searchResult,
      savedMovies,
      containsResults,
      isModalOpen,
    },
  };
};

export default useMovieSearch;
