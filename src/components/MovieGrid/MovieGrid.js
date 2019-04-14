import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MovieCard from './MovieCard/MovieCard';
import styles from '../../styles';
import ModalVideo from 'react-modal-video';
import { useAppState } from '../../store';

const MovieGrid = ({ classes, movies }) => {
  const { movieSearch } = useAppState();
  const { handleTrailerClose } = movieSearch;
  const { showModal, videoURL } = movieSearch.state;
  return (
    <main>
      <Grid container spacing={24}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
      <ModalVideo
        channel="youtube"
        isOpen={showModal}
        videoId={videoURL}
        onClose={() => handleTrailerClose()}
      />
    </main>
  );
};

export default withStyles(styles)(MovieGrid);
