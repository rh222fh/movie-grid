import React from 'react';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { useAppState } from '../store';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';
import { WatchLaterOutlined } from '@material-ui/icons';

const WatchLater = ({ classes }) => {
  const { movieGrid } = useAppState();
  const { watchLater } = movieGrid.state;

  if (watchLater.length === 0) {
    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <WatchLaterOutlined className={classes.homeSearchIcon} />

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          className={classes.homeTitle}
        >
          No movies added to Watch Later
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
        Watch Later
      </Typography>
      <MovieGrid movies={watchLater} />
    </div>
  );
};

export default withStyles(styles)(WatchLater);
