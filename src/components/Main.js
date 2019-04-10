import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MovieList from './MovieList';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
});

const Main = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <MovieList />
        </div>
      </main>
    </React.Fragment>
  );
};

export default withStyles(styles)(Main);
