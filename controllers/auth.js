const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require('../models/Index');

//register form
router.get('/register', function (req, res) {
    const context = {
        user: req.session.currentUser,
    };
    res.render('auth/register', context);
});

//register post
router.post('/register', async function (req, res) {
    try {
        const foundUser = await db.User.findOne({
            email: req.body.email,
        });
        if (foundUser) {
            return res.send({
                message: 'Account is already registered',
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
            err,
        });
    }
});

//login form
router.get('/login', function (req, res) {
    const context = {
        user: req.session.currentUser,
        message: ""
    };
    res.render('auth/login', context);
});

//login post
router.post('/login', async function (req, res) {
    try {
        const foundUser = await db.User.findOne({
            email: req.body.email,
        });
        if (!foundUser) {
            return res.render('auth/login', {
                message: 'Invalid Email or Password / 错 误 的 电 子 邮 件 或 密 码',
                user: req.session.currentUser,

            });
        }
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match) {
            return res.render('auth/login', {
                message: 'Invalid Email or Password / 错 误 的 电 子 邮 件 或 密 码',
                user: req.session.currentUser,

            });
        }
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };
        if (foundUser.username === 'admin') {
            res.redirect('/admin');
        } else {
            res.redirect('/');
        }
    } catch (err) {
        console.log(err);
        return res.send({
            err,
        });
    }
});


//logout
router.delete('/logout', async function (req, res) {
    await req.session.destroy();
    res.redirect('/auth/login');
});

module.exports = router;