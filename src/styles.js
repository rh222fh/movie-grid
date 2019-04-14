import { fade } from '@material-ui/core/styles/colorManipulator';

/**
 * Styling for all the material-ui components
 */
const styles = theme => ({
  /* Header */
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  /* MovieGrid */
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
    textAlign: 'center',
  },
  pageTitle: {
    textAlign: 'left',
  },
  /* MovieCard */
  card: {
    textAlign: 'left',
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    width: '100%',
    height: 400,
    objectFit: 'cover',
  },
  cardContent: {
    flexGrow: 1,
    width: '100%',
    padding: '8px 16px 0 16px',
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 0,
  },
  cardSubTitle: {
    fontSize: 12,
    marginBottom: 0,
  },
  cardActions: {
    padding: 0,
  },
  icon: {
    margin: 0,
  },
  button: {
    marginLeft: 'auto !important',
  },
  favoriteIcon: {
    color: '#9f3e72',
  },
  watchLaterIcon: {
    marginLeft: 'auto !important',
    color: '#70c4bc',
  },
  homeSearchIcon: {
    fontSize: 256,
    color: '#282828',
  },
  homeTitle: {
    color: '#282828',
  },
});

export default styles;
