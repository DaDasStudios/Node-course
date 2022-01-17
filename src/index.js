const Path = require('path');
const Express = require('express');
const app = Express();


// * Server settings
app.set('port', process.env.PORT || 3000);
app.set('views', Path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// * Middlewares

// * Routes
app.use(require('./routes'))

// * Static files
app.use(Express.static(Path.join(__dirname, 'public')))

// * Lintening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})
