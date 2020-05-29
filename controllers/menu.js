const express = require('express');
const router = express.Router();
const db = require('../models');

//routes

//index route
router.get('/', (req, res) => {
  db.Menu.find({}, (error, allMenu) => {
    if (error) {
      console.log(error);
    } else {
      const context = {
        allMenu: allMenu,
      };
      res.render('menu/index', context);
    }
  });
});

//new route
router.get('/new', (req, res) => {
  res.render('menu/new');
});

//create route
router.post('/', (req, res) => {
  db.Menu.create(req.body, (error, addedMenu) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/menu');
    }
  });
});

module.exports = router;
