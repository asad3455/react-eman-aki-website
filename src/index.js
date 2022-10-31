import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from 'react-router-dom';

import './manifest.json'
import './css/normalize.min.css'
import './css/bootstrap.min.css'
import './css/jquery.fancybox.css'
import './css/flexslider.css'
import './css/styles.min.css'
import './css/queries.css'
import './css/timeline.css'
import './css/gifts.css'
import "animate.css/animate.css";
import "font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
