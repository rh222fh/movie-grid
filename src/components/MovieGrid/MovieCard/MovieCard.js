import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import {
  FavoriteBorder as FavoriteInactive,
  Favorite as FavoriteActive,
  WatchLaterOutlined as WatchLaterInactive,
  WatchLater as WatchLaterActive,
} from '@material-ui/icons';
import classNames from 'classnames';
import styles from '../../../styles';
import { withStyles } from '@material-ui/core/styles';

import { useAppState } from '../../../store';

const MovieCard = ({ classes, movie }) => {
  const { movieSearch } = useAppState();
  const { handleFavoriteMovie, handleWatchLater } = movieSearch;

  return (
    <Grid zeroMinWidth item key={movie.id} sm={6} md={4} lg={3}>
      <Card className={classes.card} elevation={2}>
        <CardMedia
          className={classes.cardMedia}
          image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          title={movie.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.cardTitle}
            noWrap
          >
            {movie.title}
          </Typography>
          <Typography gutterBottom component="p" className={classes.cardTitle}>
            {movie.release_date.substr(0, 4)}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton
            className={classNames(classes.icon, classes.favoriteIcon)}
            aria-label="Add to favorites"
            onClick={() => {
              handleFavoriteMovie(movie);
            }}
          >
            {movie.favorite ? <FavoriteActive /> : <FavoriteInactive />}
          </IconButton>
          <IconButton
            className={`${classes.icon} ${classes.watchLaterIcon}`}
            aria-label="Watch later"
            onClick={() => {
              handleWatchLater(movie);
            }}
          >
            {movie.watchLater ? <WatchLaterActive /> : <WatchLaterInactive />}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(MovieCard);
