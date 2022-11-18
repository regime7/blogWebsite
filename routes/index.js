var express = require("express");
var router = express.Router(),
User = require("../models/User");
var localStrategy = require("passport-local");
var passport = require("passport");

router.get("/", function(req, res){
    res.render("home");
})


router.get("/login", function(req, res) {
    res.render("login");
})

router.post("/login", function(req, res){
    res.redirect("/");
})


router.get("/signup", function(req, res) {
    res.render("signup")
})

router.post("/signup", function(req, res){
    
})



module.exports = router;