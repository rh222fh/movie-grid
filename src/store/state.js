export const initialState = {
  searchInput: '',
  movieList: [],
  savedMovies: [],
  watchLater: [],
  showModal: false,
  videoURL: '',
};

export function reducer(state, action) {
  const setPayload = key => ({ ...state, [key]: action.payload });
  switch (action.type) {
    case 'setShowModal':
      return setPayload('showModal');
    case 'setVideoURL':
      return setPayload('videoURL');
    case 'setSearchInput':
      return setPayload('searchInput');
    case 'setSearchResult':
      return setPayload('searchResult');
    case 'addFavorite':
      return { ...state, savedMovies: [...state.savedMovies, action.payload] };
    case 'removeFavorite':
      return {
        ...state,
        savedMovies: [
          ...state.savedMovies.filter(movie => movie.id !== action.payload.id),
        ],
      };
    case 'addWatchLater':
      return { ...state, watchLater: [...state.watchLater, action.payload] };
    case 'removeWatchLater':
      return {
        ...state,
        watchLater: [
          ...state.watchLater.filter(movie => movie.id !== action.payload.id),
        ],
      };
    default:
      throw new Error();
  }
}
