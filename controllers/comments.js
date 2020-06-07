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
                user: req.session.currentUser,
            };
            res.render('comments', context);
        }
    });
});

//create route
router.post('/', (req, res) => {
    comment = {
        name: req.session.currentUser.username,
        text: req.body.text
    }
    db.Comment.create(comment, (error, addComment) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/comments');
        }
    });
});

module.exports = router;