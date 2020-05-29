/* External Module */
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

/* Internal Modules */
controller = require('./controllers');

/* Instance Module */
const app = express();

/* Global Variables */
const PORT = 4000;

/* app configuration */
app.use('view engine', 'ejs');

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

/* Routes */

//Root Route
app.get('/', (req, res) => {
  res.render('index');
});

//Menu Route
app.use('/menu', controllers.menu);

//How to direct a item route

//Binding Server to Port
app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
