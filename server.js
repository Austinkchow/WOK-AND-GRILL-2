/* External Module */
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

/* Internal Modules */
const controllers = require('./controllers');

/* Instance Module */
const app = express();

/* Global Variables */
const PORT = 4000;

/* app configuration */
app.set('view engine', 'ejs');

/* Middleware */
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));

/* Routes */

//Root Route
app.get('/', (req, res) => {
    res.render('index');
});

//Menu Route
app.use('/menu', controllers.menu);

//Item Route
app.use('/items', controllers.items);

//Binding Server to Port
app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`);
});