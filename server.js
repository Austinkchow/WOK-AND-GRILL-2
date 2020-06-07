/* External Module */
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

/* Internal Modules */
const controllers = require('./controllers');
const adminRequired = require('./middleware/adminRequire');
const authRequired = require('./middleware/authRequire');
const db = require('./models/Index');

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

/* Ability to use the public folder */
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

//Root Route
app.get('/', function (req, res) {
  db.Slide.find({}, (error, allSlide) => {
    if (error) {
      console.log(error);
    } else {
      const context = {
        allSlide: allSlide,
        user: req.session.currentUser
      };
      res.render('index', context);
    }
  });
});

//location Route
app.get('/location', (req, res) => {
  const context = {
    user: req.session.currentUser
  };
  res.render('location', context);
});

//About us route
app.get('/aboutus', (req, res) => {
  db.Hour.find({}, (error, allHour) => {
    if (error) {
      console.log(error);
    } else {
      const context = {
        allHour: allHour,
        day: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        user: req.session.currentUser
      };
      res.render('about-us', context);
    }
  });
});

//auth routes
app.use('/auth', controllers.auth);

//admin routes
app.use('/admin', adminRequired, controllers.admin);

//Menu Route
app.use('/menu', controllers.menu);

//Item Route
app.use('/items', adminRequired, controllers.items);

//comments Route
app.use('/comments', adminRequired, controllers.comments);

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