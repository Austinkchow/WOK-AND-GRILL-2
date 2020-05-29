/* Bring in Mongoose */
const mongoose = require('mongoose');

/* Set up Schema */
const menuSchema = new mongoose.Schema({
    name: String,
    image: String
})

/* set up model */
const Menu = mongoose.Collection('menu', menuSchema);

/* exports model */
module.exports = Menu;