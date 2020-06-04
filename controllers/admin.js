const express = require('express');
const router = express.Router();
const db = require('../models')

/* router.get('/', (req, res) => {
    db.Menu.find({}, (error, allMenu) => {
        if (error) {
            console.log(error);
        } else {
            const context = {
                allMenu: allMenu,
            };
            res.render('admin/index', context);
        }
    });
}); */

//Show route
router.get('/', (req, res) => {
    db.Menu.find({}).populate("items").exec(
        function (error, allMenu) {
            if (error) {
                console.log(error);
            } else {
                const context = {
                    allMenu: allMenu,
                };
                res.render('admin/index', context);
            }
        })
});

module.exports = router;