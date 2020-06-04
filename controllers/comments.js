const express = require('express');
const router = express.Router();
const db = require('../models');

//routes

//index route
router.get('/', (req, res) => {
    db.Comment.find({}, (error, allComments) => {
        if (error) {
            console.log(error);
        } else {
            const context = {
                allComments: allComments,
            };
            res.render('comments', context);
        }
    });
});

//create route
router.post('/', (req, res) => {
    db.Comment.create(req.body, (error, addComment) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/comments');
        }
    });
});

module.exports = router;