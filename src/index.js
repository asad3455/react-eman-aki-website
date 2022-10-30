import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

import './manifest.json'
import './css/normalize.min.css'
import './css/bootstrap.min.css'
import './css/jquery.fancybox.css'
import './css/flexslider.css'
import './css/styles.min.css'
import './css/queries.css'
import "animate.css/animate.css";
import "font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
