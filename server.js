/* External Module */
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

/* Internal Modules */
const controllers = require('./controllers');

/* Instance Module */
const app = express();

/* Global Variables */
const PORT = 4000;

/* app configuration */
app.set('view engine', 'ejs');

/* Middleware */
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(methodOverride('_method'));

/* Ability to use the public foleder */
app.use(express.static(__dirname + '/public'));
app.use(
  session({
    store: new MongoStore({
      url: 'mongodb://localhost:27017/wokAndGrill',
    }),
    secret: 'wok and grill',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

const authRequired = function (req, res, next) {
  if (req.session.currentUser.username === 'admin') {
    return res.redirect('/admin');
  }
  next();
};

/* Routes */

//Root Route
app.get("/", function (req, res) {
  console.log(req.session.currentUser);
  res.render("index", {
    user: req.session.currentUser
  });
});

//location Route
app.get('/location', (req, res) => {
  res.render('location');
});

//About us route
app.get('/aboutus', (req, res) => {
  res.render('about-us');
});

//auth routes
app.use('/auth', controllers.auth);

//admin routes
app.use('/admin', controllers.admin);

//Menu Route
app.use('/menu', controllers.menu);

//Item Route
app.use('/items', controllers.items);

//comments Route
app.use('/comments', controllers.comments);

//Binding Server to Port
app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});