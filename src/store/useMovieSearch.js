import React from 'react';
import { initialState, reducer } from './state';

function init(state) {
  const savedMovies = localStorage.getItem('savedMovies');
  const watchLater = localStorage.getItem('watchLater');
  if (savedMovies) {
    state.savedMovies = JSON.parse(savedMovies);
  }
  if (watchLater) {
    state.watchLater = JSON.parse(watchLater);
  }
  console.log('savedMovies :', savedMovies);
  console.log('state :', state);
  return state;
}

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

  React.useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  React.useEffect(() => {
    localStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [watchLater]);

  const handleMovieSearch = e => {
    dispatch({ type: 'setSearchInput', payload: e.target.value });
  };

  const clearSearch = () => {
    dispatch({ type: 'setSearchInput', payload: '' });
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

  const handleFavoriteMovie = movie => {
    movie.favorite = true;
    if (savedMovies.find(m => m.id === movie.id)) {
      dispatch({ type: 'removeFavorite', payload: movie });
    } else {
      dispatch({ type: 'addFavorite', payload: movie });
    }
  };

  const handleWatchLater = movie => {
    movie.watchLater = true;
    if (watchLater.find(m => m.id === movie.id)) {
      dispatch({ type: 'removeWatchLater', payload: movie });
    } else {
      dispatch({ type: 'addWatchLater', payload: movie });
    }
  };

  const handleViewTrailer = movie => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${
      movie.id
    }/videos?api_key=${apiKey}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(payload => {
        console.log('payload :', payload);
        dispatch({ type: 'setVideoURL', payload: payload.results[0].key });
        dispatch({ type: 'setShowModal', payload: true });
      })
      .catch(error => console.log(error));
  };

  const handleTrailerClose = movie => {
    dispatch({ type: 'setShowModal', payload: false });
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
