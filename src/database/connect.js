const config = require("../../config.js");
const mongoose = require("mongoose")

module.exports = async (client) => {
    mongoose.connect(config.bot.mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false
    }).then(() => {
    console.log("(!) Mongoose Connection Succc!");
    }).catch(a => console.log("(!) Mongoose Connection Succc!"));
}