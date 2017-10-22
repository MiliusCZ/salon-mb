import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Router } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import { App } from './app/containers/app';

import './assets/styles/global.scss';

ReactGA.initialize('UA-32364050-4');

const history = createHistory();

history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);
