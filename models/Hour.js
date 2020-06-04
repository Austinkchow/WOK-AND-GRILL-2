/* Bring in Mongoose */
const mongoose = require('mongoose');

/* Set up Schema */
const hourSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
});



/* set up model */
const Hour = mongoose.model('Hour', hourSchema);

/* exports model */
module.exports = Hour;