export const initialState = {
  searchInput: '',
  movieList: [],
  savedMovies: [],
};

export function reducer(state, action) {
  const setPayload = key => ({ ...state, [key]: action.payload });
  switch (action.type) {
    case 'selectFile':
      return initialState;
    case 'setSearchInput':
      return setPayload('searchInput');
    case 'setSearchResult':
      return setPayload('searchResult');
    case 'setSavedMovies':
      return setPayload('savedMovies');
    default:
      throw new Error();
  }
}
