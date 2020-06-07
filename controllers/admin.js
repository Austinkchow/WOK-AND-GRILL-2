const express = require('express');
const router = express.Router();
const db = require('../models/Index')

//Show route
/* router.get('/', (req, res) => {
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
}); */

router.get('/', async function (req, res) {
    try {
        const allMenu = await db.Menu.find({}).populate("items");
        const allComment = await db.Comment.find({});
        const allHour = await db.Hour.find({});
        const allSlide = await db.Slide.find({});
        const context = {
            allMenu: allMenu,
            allComment: allComment,
            allHour: allHour,
            day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ],
            allSlide: allSlide
        };
        res.render('admin/index', context);
    } catch {
        console.log(error);
    }
});

module.exports = router;