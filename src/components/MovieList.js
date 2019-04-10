import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import IconButton from '@material-ui/core/IconButton';

import { useAppState } from '../store';

const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    //paddingTop: '56.25%', // 16:9
    width: '100%',
    height: 400,
    objectFit: 'cover',
  },
  cardContent: {
    flexGrow: 1,
    padding: '8px 16px 0 16px',
  },
  cardTitle: {
    fontSize: 14,
    marginBottom: 0,
  },
  cardActions: {
    padding: 0,
  },
  watchLater: {
    marginLeft: 'auto !important',
  },
  icon: {
    margin: 0,
  },
});

const MovieList = props => {
  const { classes } = props;
  const { movieSearch } = useAppState();
  const { searchResult, containsResults } = movieSearch.state;
  if (!containsResults) {
    console.log('asd :', searchResult);
    return null;
  }

  return (
    <Grid container spacing={24}>
      {searchResult.map(movie => (
        <Grid item key={movie.id} sm={6} md={4} lg={3}>
          <Card className={classes.card}>
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
              >
                {movie.title.length < 31
                  ? movie.title
                  : `${movie.title.substr(0, 31)}…`}
              </Typography>
              <Typography
                gutterBottom
                component="p"
                className={classes.cardTitle}
              >
                {movie.release_date.substr(0, 4)}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <IconButton
                className={classes.icon}
                aria-label="Add to favorites"
              >
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton
                className={`${classes.icon} ${classes.watchLater}`}
                aria-label="Watch later"
              >
                <WatchLaterOutlinedIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

MovieList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieList);
