/* Edited By: Isaac Shepard : May 29 */

/* External Modules */
const express = require('express');
const router = express.Router();

/* Internal Modules */
const db = require('../models');


/* ----- ----- ----- ----- Routes ----- ----- ----- -----*/
/* Root Route: /items */

/* item-display route */
router.get("/", async function (req, res) {
    try {
        // run code
        const oneItem = await db.Item.findOne({});
        const context = {
            item: oneItem
        };
        res.render("items/item-display");
    } catch (error) {
        console.log("error");
        res.send({
            message: "Internal Server Error"
        });
    }
});
/* new route */

/* Export Router */
module.exports = router;