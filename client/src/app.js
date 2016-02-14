
//https://github.com/zilverline/react-tap-event-plugin
//Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Inject inline sass
import './scss/app.scss';

import ReactDOM from 'react-dom';
import React from 'react'; //eslint-disable-line no-unused-vars

import Hello from './components/hello.jsx'; //eslint-disable-line no-unused-vars
import TopBar from './components/topBar.jsx'; //eslint-disable-line no-unused-vars
import circle from './components/circle.js';

ReactDOM.render(<TopBar />, document.getElementById('top-bar') );
ReactDOM.render(<Hello />, document.getElementById('hello') );

circle();
