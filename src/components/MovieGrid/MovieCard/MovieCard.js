import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
  Button,
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
import placeholder from '../../../assets/placeholder.png';
import { useAppState } from '../../../store';

const MovieCard = ({ classes, movie }) => {
  const { movieGrid } = useAppState();
  const {
    handleFavoriteMovie,
    handleWatchLater,
    handleViewTrailer,
  } = movieGrid;
  const { savedMovies, watchLater } = movieGrid.state;
  return (
    <Grid zeroMinWidth item key={movie.id} xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card} elevation={2}>
        <CardMedia
          className={classes.cardMedia}
          image={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
              : placeholder
          }
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
          <Typography
            gutterBottom
            component="p"
            className={classes.cardSubTitle}
          >
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
            {savedMovies.find(m => m.id === movie.id) ? (
              <FavoriteActive />
            ) : (
              <FavoriteInactive />
            )}
          </IconButton>
          <Button
            size="small"
            onMouseDown={() => handleViewTrailer(movie)}
            className={classes.button}
          >
            View Trailer
          </Button>
          <IconButton
            className={`${classes.icon} ${classes.watchLaterIcon}`}
            aria-label="Watch later"
            onClick={() => {
              handleWatchLater(movie);
            }}
          >
            {watchLater.find(m => m.id === movie.id) ? (
              <WatchLaterActive />
            ) : (
              <WatchLaterInactive />
            )}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(MovieCard);
