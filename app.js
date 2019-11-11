const express = require('express');
const favicon = require('serve-favicon');
const app = express();

app.use(favicon('./favicon.ico'));

app.use((req, res, next) => {
    res.sendFile(__dirname + '/main.html');
});

app.use((error, req, res, next) => {
    res.send("<h1>CrispyPickleCode has errors</h1>");
});

module.exports = app;