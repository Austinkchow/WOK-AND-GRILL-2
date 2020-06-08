/* External Module */
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();
/* Internal Modules */
const controllers = require('./controllers');
const adminRequired = require('./middleware/adminRequire');

/* Instance Module */
const app = express();

/* Global Variables */
const PORT = process.env.PORT;

/* app configuration */
app.set('view engine', 'ejs');

/* Middleware */
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

/* session config */
app.use(
  session({
    store: new MongoStore({
      url: process.env.MONGODB_URI || 'mongodb://localhost:27017/wokAndGrill',
    }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

/* Controllers */
//auth routes
app.use('', controllers.root);

//auth routes
app.use('/auth', controllers.auth);

//admin routes
app.use('/admin', adminRequired, controllers.admin);

//Menu Route
app.use('/menu', controllers.menu);

//Item Route
app.use('/items', adminRequired, controllers.items);

//comments Route
app.use('/comments', controllers.comments);

//hour Route
app.use('/hour', adminRequired, controllers.hour);

//slide Route
app.use('/slide', adminRequired, controllers.slide);

app.use((req, res) => {
  res.status(404).render('404');
});

//Binding Server to Port
app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
