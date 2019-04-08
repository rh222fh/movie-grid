import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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
    paddingTop: '56.25%', // 16:9
    width: '100%',
    height: 200,
    objectFit: 'cover',
  },
  cardContent: {
    flexGrow: 1,
    padding: '8px 16px 0 16px',
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
    <Grid container spacing={40}>
      {searchResult.map(movie => (
        <Grid item key={movie.id} sm={6} md={4} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              title={movie.title}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h2">
                {movie.title}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="Add to favorites">
                <FavoriteBorderIcon />
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
