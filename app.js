var express = require("express"),
mongoose = require("mongoose"),
bodyParser = require("body-parser"),
passport = require("passport"),
localStrategy = require("passport-local"),
expressSession = require("express-session"),
methodOverride = require("method-override"),
blogRoute = require("./routes/blog"),
authRoute = require("./routes/auth"),
indexRoute = require("./routes/index"),
User = require("./models/User");

var app = express();
app.set("view engine", "ejs")
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/blogWebsite");

// passport.initialize();
// passport.session();

app.use(expressSession({
    secret: "I am not going to tell you the secret !#$$%@",
    saveUninitialized: false,
    resave: false
}))



app.use("/",indexRoute);
app.use("/blogs",blogRoute)
app.use("/",authRoute)



app.listen(3000, function(){
    console.log("===============================")
    console.log("Blog Website initiated at 3000");
    console.log("===============================")
})