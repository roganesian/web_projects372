const express = require('express');
const app = express();
const port = 1337;

app.get(['/', '/index'], function(request, response){
    response.type('text/plain');
    response.send('Rhody Travel');
});

app.get('/about', function(request, response){
    response.type('text/plain');
    response.send('About Rhody Travel');
});

app.use(function(request, response){
    response.type('text/plain');
    response.status(404);
    response.send('Page Not Found');
});

app.use(function(err, request, response, next){
    console.error(err.stack);
    response.type('text/plain');
    response.status(500);
    response.send('Internal Server Error');
});

app.listen(port);
