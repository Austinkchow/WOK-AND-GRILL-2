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
<<<<<<< HEAD
    }catch(error){
        console.log(error.errmsg);
        res.send({message: "Internal Server Error"});
=======
    } catch (error) {
        console.log("error");
        res.send({
            message: "Internal Server Error"
        });
>>>>>>> submaster
    }
});
/* new route */
router.get("/new", async function(req,res){
    try{
        //run code
        res.render("items/item-new");
    }catch(error){
        console.log(error.errmsg);
        res.send({message: "Interal Server Error"});
    }
});
/* create route */
router.post("/", async function(req, res){
    try {
        //run code
        const createItem = await db.Item.create(req.body);
        res.redirect("/items");
    } catch (error) {
        console.log(error.errmsg);
        res.send({message: "Interal Server Error"});
    }
});
/* edit route */

/* update route */

/* delete route */


/* Export Router */
module.exports = router;