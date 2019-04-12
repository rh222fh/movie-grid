import React from 'react';
import MovieGrid from '../components/MovieGrid/MovieGrid';

import { useAppState } from '../store';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

const WatchLater = ({ classes }) => {
  const { movieSearch } = useAppState();
  let { watchLater } = movieSearch.state;

  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        className={classes.pageTitle}
      >
        Watch Later
      </Typography>
      <MovieGrid movies={watchLater} />
    </div>
  );
};

export default withStyles(styles)(WatchLater);
