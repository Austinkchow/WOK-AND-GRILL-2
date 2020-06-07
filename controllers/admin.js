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
                        db.Hour.find({}, (error, allHour) => {
                            if (error) {
                                console.log(error);
                            } else {
                                const context = {
                                    allMenu: allMenu,
                                    allComment: allComment,
                                    allHour: allHour,
                                    day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ]
                                };
                                res.render('admin/index', context);
                            }
                        })
                    }
                })
            };
        })
});
module.exports = router;