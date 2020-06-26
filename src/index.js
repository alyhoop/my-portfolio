import React from 'react';
import ReactDOM from 'react-dom';
import './SCSS/index.scss';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Portfolio />
    <Resume />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
