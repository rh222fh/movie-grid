import React from 'react';
import './App.css';
//import { useAppState } from './store';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
}

export default App;
