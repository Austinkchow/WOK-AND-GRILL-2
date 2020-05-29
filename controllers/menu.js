const express = require('express');
const router = express.Router();
const db = require('../models');

//routes

//index route
router.get('/', (req, res) => {
    res.render('menu/index')
})

//new route
router.get('/new', (req, res) => {
    res.render('menu/new')
})

//create route
router.post('/', (req, res) => {
    db.Menu.create(req.body, (error, addedMenu) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    })

})

module.exports = router;