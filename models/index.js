// connect mongodb

const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/WokAndGrill';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(function () {
    console.log('Mongodb connected...');
}).catch(function (error) {
    console.log(error);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongodb disconnected....');
});

module.exports = {
    Menu: require("./Menu"),
};

/* //bring in mongoose
const mongoose = require('mongoose');

//connect to mongodb
const connectionString = "mongodb://localhost:27017/wokAndGrill"
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(function () {
    console.log("mongoose connected")
}).catch(function (error) {
    console.log(error)
})

mongoose.connection.on('disconnected', function () {
    console.log('mongoose disconnected');
})

//export models
module.exports = {
    Menu: require('./Menu')
} */