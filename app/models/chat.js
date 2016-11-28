/**
 * Created by kobe on 11/27/2016.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("chat", schema);
