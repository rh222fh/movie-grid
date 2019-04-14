import React from 'react';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { useAppState } from '../store';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';
import { FavoriteBorder } from '@material-ui/icons';

const Favorites = ({ classes }) => {
  const { movieSearch } = useAppState();
  const { savedMovies } = movieSearch.state;

  if (savedMovies.length === 0) {
    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <FavoriteBorder className={classes.homeSearchIcon} />

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          className={classes.homeTitle}
        >
          No movies added to Favorites
        </Typography>
      </div>
    );
  }

  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        className={classes.pageTitle}
      >
        Favorite Movies
      </Typography>
      <MovieGrid movies={savedMovies} />
    </div>
  );
};

export default withStyles(styles)(Favorites);
