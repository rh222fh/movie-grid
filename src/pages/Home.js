import React from 'react';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { useAppState } from '../store';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';

const Home = ({ classes }) => {
  const { movieSearch } = useAppState();
  const { searchResult, containsResults } = movieSearch.state;

  if (!containsResults) {
    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Search className={classes.homeSearchIcon} />

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          className={classes.homeTitle}
        >
          Search movie...
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
        Search Results
      </Typography>
      <MovieGrid movies={searchResult} />
    </div>
  );
};

export default withStyles(styles)(Home);
