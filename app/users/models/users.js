var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    email: String,
    isAdmin: {type: Boolean, default: false}
});

module.exports = mongoose.model("users", schema);

// name: {type:String, index: { unique: false}, dropDups: true},
// email: {type:String, index: { unique: true}, dropDups: true},
// isAdmin: {type: Boolean, default: false}