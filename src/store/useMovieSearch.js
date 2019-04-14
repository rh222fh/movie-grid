import React from 'react';
import { initialState, reducer } from './state';

/**
 * Checks if any data exists in localStorage during initialization, and sets it to its corresponding state arrays.
 */
const init = state => {
  const savedMovies = localStorage.getItem('savedMovies');
  const watchLater = localStorage.getItem('watchLater');
  if (savedMovies) {
    state.savedMovies = JSON.parse(savedMovies);
  }
  if (watchLater) {
    state.watchLater = JSON.parse(watchLater);
  }
  return state;
};

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

const useMovieSearch = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState, init);
  const {
    searchInput,
    searchResult,
    savedMovies,
    watchLater,
    showModal,
    videoURL,
  } = state;
  const containsResults = !!searchResult > 0;

  /**
   * Saves data to localStorage if any changes are made to the savedMovies state.
   */
  React.useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  /**
   * Saves data to localStorage if any changes are made to the watchLater state.
   */
  React.useEffect(() => {
    localStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [watchLater]);

  /**
   * Handler for typing in the search field, saves the input value to searchInput state.
   */
  const handleMovieSearch = e => {
    dispatch({ type: 'setSearchInput', payload: e.target.value });
  };

  /**
   * Clears searchInput state
   */
  const clearSearch = () => {
    dispatch({ type: 'setSearchInput', payload: '' });
  };

  /**
   * Fetches from TMDB when any changes are made to searchInput, savedMovies and watchLater state,
   * the latter are included to update the button indicators when adding/removing to favorite/watch later.
   */
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

  /**
   * Toggle between adding/removing favorite movie when clicking its icon.
   */
  const handleFavoriteMovie = movie => {
    movie.favorite = true;
    if (savedMovies.find(m => m.id === movie.id)) {
      dispatch({ type: 'removeFavorite', payload: movie });
    } else {
      dispatch({ type: 'addFavorite', payload: movie });
    }
  };

  /**
   * Toggle between adding/removing a movie in watch later when clicking its icon.
   */
  const handleWatchLater = movie => {
    movie.watchLater = true;
    if (watchLater.find(m => m.id === movie.id)) {
      dispatch({ type: 'removeWatchLater', payload: movie });
    } else {
      dispatch({ type: 'addWatchLater', payload: movie });
    }
  };

  /**
   * Fetches the movie YouTube key from TMDB, and displays modal with the movie trailer.
   */
  const handleViewTrailer = movie => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${
      movie.id
    }/videos?api_key=${apiKey}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(payload => {
        dispatch({ type: 'setVideoURL', payload: payload.results[0].key });
        dispatch({ type: 'setShowModal', payload: true });
      })
      .catch(error => console.log(error));
  };

  /**
   * Handler for hiding the YouTube trailer modal.
   */
  const handleTrailerClose = movie => {
    dispatch({ type: 'setShowModal', payload: false });
  };

  return {
    handleMovieSearch,
    handleFavoriteMovie,
    handleWatchLater,
    clearSearch,
    handleViewTrailer,
    handleTrailerClose,
    state: {
      ...state,
      searchInput,
      searchResult,
      savedMovies,
      containsResults,
      showModal,
      videoURL,
    },
  };
};

export default useMovieSearch;
