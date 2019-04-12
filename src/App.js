import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import WatchLater from './pages/WatchLater';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#880e4f',
    },
    secondary: {
      main: '#4db6ac',
    },
  },
});

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/favorites/" component={Favorites} />
          <Route path="/watch-later/" component={WatchLater} />
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
