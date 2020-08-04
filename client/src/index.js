import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';

import 'bootstrap/dist/js/bootstrap';
import './scss/main.scss';

import {
    BrowserRouter,
} from 'react-router-dom';

const api_regex = /^\/api\/.*/;
// if using "/api/" in the pathname, don't use React Router
if (api_regex.test(window.location.pathname)) {
    //do nothing and let the server deal with it
} else {
    ReactDOM.render(<BrowserRouter forceRefresh={false} basename={'/'}><Routes /></BrowserRouter>, document.getElementById('root'));
    
}
