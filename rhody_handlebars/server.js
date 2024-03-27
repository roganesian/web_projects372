const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 1337;
var handlebars = exphbs.create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express(__dirname + '/public'));
app.use(express.static('public/img'));

app.get(['/', '/index'], function(request, response){
    response.render('home');
});

app.get('/about', function(request, response){
    response.render('about');
});

app.use(function(request, response){
    response.status(404);
    response.render('404');
});

app.use(function(err, request, response, next){
    console.error(err.stack);
    response.status(500);
    response.render('500');
});

app.listen(port);
