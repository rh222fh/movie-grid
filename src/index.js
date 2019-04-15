import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './store';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
