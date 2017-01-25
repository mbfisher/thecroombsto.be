import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const debug = require('debug')('client');

require('./main.scss');

const data = JSON.parse(document.getElementById('data').innerHTML);

debug('Rendering', data);

ReactDOM.render(<App user={data.user}/>, document.getElementById('app'));