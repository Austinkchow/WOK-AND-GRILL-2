const express = require('express');
const router = express.Router();
const db = require('../models')

//Show route
router.get('/', (req, res) => {
    db.Menu.find({}).populate("items").exec(
        function (error, allMenu) {
            if (error) {
                console.log(error);
            } else {
                db.Comment.find({}, (error, allComment) => {
                    if (error) {
                        console.log(error);
                    } else {
                        const context = {
                            allMenu: allMenu,
                            allComment: allComment
                        };
                        res.render('admin/index', context);
                    }
                })

            }
        })
});

module.exports = router;