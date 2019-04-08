import React from 'react';
import createContainer from 'constate';
import useMovieSearch from './useMovieSearch';

export const { Context, Provider } = createContainer(() => {
  const movieSearch = useMovieSearch();

  return { movieSearch };
});
export const useAppState = () => {
  const state = React.useContext(Context);
  return state;
};
