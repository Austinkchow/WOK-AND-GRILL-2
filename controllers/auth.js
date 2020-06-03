const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require('../models');

//register form
router.get('/register', function (req, res) {
    res.render('auth/register');
});

//register post
router.post('/register', async function (req, res) {
    try {
        const foundUser = await db.User.findOne({
            email: req.body.email
        });
        if (foundUser) {
            return res.send({
                message: 'Account is already registered'
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        const newUser = await db.User.create(req.body);
        res.redirect('login');
    } catch (err) {
        console.log(err);
        res.send({
            err
        });
    }
});

//login form
router.get('/login', function (req, res) {
    res.render('auth/login');
});

//login post


//logout
module.exports = router;