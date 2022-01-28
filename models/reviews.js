var mongoose = require("mongoose");

var comment = new mongoose.Schema({
    rating: Number,
    name: String,
    review: String,
    monument: String
});

module.exports = mongoose.model("Comment",comment);