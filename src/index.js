import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Contact from './Components/Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
