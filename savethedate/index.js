'use strict';

const newrelic = process.env.NODE_ENV === 'production' ? require('newrelic') : null;

const express = require('express');
const debug = require('debug')('server');

const app = express();
app.set('users', require('./users.json'));

app.use(express.static('./public'));

app.get('/status', (req, res) => {
    res.json('ok');
});

app.get('/:user', (req, res) => {
    const username = req.params.user.toLowerCase();
    const user = app.get('users')[username];

    if (!user) {
        debug('No user found for "%s"', user);
        return res.status(404).end();
    }

    debug('Rendering for "%s"', username);

    const data = JSON.stringify({ user });

    const timingHeader = newrelic ? newrelic.getBrowserTimingHeader() : '';

    const content = `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${timingHeader}
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet" type="text/css">
    <link href="/bundle.css" rel="stylesheet" type="text/css">
</head>

<body>
<div id="app"></div>
<script src="/modernizr-bundle.js"></script>
<script type="application/json" id="data">${data}</script>
<script src="/bundle.js"></script>
</body>
</html>`;

    res.end(content);
});

const listener = app.listen(process.env.PORT || 3000, () => {
    debug('Listening on %d', listener.address().port);
});