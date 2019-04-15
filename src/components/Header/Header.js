import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
} from '@material-ui/core';
import {
  Search,
  Favorite,
  FavoriteBorder,
  LocalMovies,
  WatchLater,
  WatchLaterOutlined,
} from '@material-ui/icons';
import styles from '../../styles';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { useAppState } from '../../store';

const Header = ({ classes, location }) => {
  const { movieSearch } = useAppState();
  const { handleMovieSearch, clearSearch } = movieSearch;
  const { savedMovies, watchLater, searchInput } = movieSearch.state;
  const shouldRedirect = location.pathname !== '/' && searchInput.length > 0;

  return (
    <div className={classes.root}>
      {shouldRedirect && <Redirect to="/" />}
      <AppBar position="fixed" elevation={5}>
        <Toolbar>
          <IconButton
            component={Link}
            color="inherit"
            to="/"
            className="routerLink"
          >
            <LocalMovies />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            MovieGrid
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleMovieSearch}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              component={Link}
              color="inherit"
              to="/favorites"
              className="routerLink"
              onClick={() => clearSearch()}
            >
              <Badge badgeContent={savedMovies.length} color="secondary">
                {savedMovies.length !== 0 ? <Favorite /> : <FavoriteBorder />}
              </Badge>
            </IconButton>

            <IconButton
              component={Link}
              color="inherit"
              to="/watch-later"
              className="routerLink"
              onClick={() => clearSearch()}
            >
              <Badge badgeContent={watchLater.length} color="secondary">
                {watchLater.length !== 0 ? (
                  <WatchLater />
                ) : (
                  <WatchLaterOutlined />
                )}
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(withRouter(Header));
