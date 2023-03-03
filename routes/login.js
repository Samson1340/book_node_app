const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const router = express.Router();

router.use(cookieParser());
// parsing the incoming data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// creating 24 hours from milliseconds


//session middleware
router.use(sessions({
    secret: "fhrgfgrfrty84fwir767",
    saveUninitialized:true,
    resave: false
}));

//username and password
const myusername = 'user'
const mypassword = 'user'

// a variable to save a session
var session;



router.get('/', function(req, res){
    res.render('login');
   
})

router.post('/user', function(req, res){

    if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        res.redirect('/index')
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }
    else{
        res.send('Invalid username or password');
    }

})

router.get('/logout', function(req, res) {
    req.session.destroy();
    session = "";
    res.redirect('/');
})


module.exports = {
    router,
    session
}