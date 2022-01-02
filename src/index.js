import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Images from './components/Images'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Images />
  </React.StrictMode>,
  document.getElementById('root')
);
