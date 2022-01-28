const path = require('path');

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var Reviews = require('./models/reviews');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

mongoose.connect("mongodb+srv://Kunal:kunal123@cluster0.hbgzc.mongodb.net/test", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
    res.render("neon");
});

app.get("/homepage.html", (req, res, next) => {
    res.render("homepage");
});

app.get("/home.html", (req,res,next) => {
    res.render("home");
});

app.get("/contact.html", (req,res,next) => {
    res.render("contact");
})

app.get("/north.html", (req, res, next) => {
    res.render("north");
});
app.get("/south.html", (req, res, next) => {
    res.render("north");
});
app.get("/east.html", (req, res, next) => {
    res.render("north");
});
app.get("/west.html", (req, res, next) => {
    res.render("north");
});

app.get("/about_north_a", (req, res, next) => {
    res.render("about_north_a");
})

app.get("/reviews",(req, res, next) => {
    Reviews.find({}, (err, allComments) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render("review",{comment: allComments});
        }
    });
});

app.post("/reviews",(req, res, next) => {
    let name = req.body.name;
    let rating = req.body.rating;
    let review = req.body.review;
    let mon = req.body.monument;

    var newComment = {name: name, rating: rating, review: review, monument: mon};
    Reviews.create(newComment, (err, comment) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("added");
        }
    });
    res.redirect("/reviews");
});

app.listen(3000);