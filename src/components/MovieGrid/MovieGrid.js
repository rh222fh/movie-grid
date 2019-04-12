import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MovieCard from './MovieCard/MovieCard';
import classNames from 'classnames';
import styles from '../../styles';

const MovieGrid = ({ classes, movies }) => {
  return (
    <main>
      <Grid container spacing={24}>
        {movies.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </Grid>
    </main>
  );
};

export default withStyles(styles)(MovieGrid);
