import React from 'react';
import createContainer from 'constate';
import useMovieGrid from './useMovieGrid';

export const { Context, Provider } = createContainer(() => {
  const movieGrid = useMovieGrid();
  return { movieGrid };
});

export const useAppState = () => {
  const state = React.useContext(Context);
  return state;
};
