//Modules Used
const express = require("express");
const ejs = require("ejs");
//Global Variables
const port = 3000;

//Methods Used
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Main Page of the website
app.get("/", (req, res) =>{
    res.render('mainPage');
});

//access point for the main Page
app.listen(port, (req, res) =>{
    console.log(`server Running on port ${port}`);
});
