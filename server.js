/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
*  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Leonardo de la Mora Caceres Student ID: 152877205 Date: 01-June-2023
*
*  Online (Cyclic) Link: ________________________________________________________
*
********************************************************************************/ 
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const print = console.log();

//store return of listen if later closing the server explicitly
//const server = app...
app.listen(port, () => {
    print(`Express http server listening on port ${port}`);
});


/*--const express = require('express');
--const app = express();
--const port = process.env.PORT || 8080;*/

/*// Middleware for serving static files
app.use(express.static('public'));

// Route for redirecting to "/about"
app.get('/', (req, res) => {
  res.redirect('/about');
});

// Route for serving the "about.html" file
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Express http server listening on port ${port}`);
});*/



/*var express = require("express");
var app = express();
var HTTP_PORT = process.env.PORT || 8080;*/

/*// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.send("Hello World<br /><a href='/about'>Go to the about page</a>");
});

// setup another route to listen on /about
app.get("/about", function(req,res){
    res.send("<h3>About</h3>");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);

*/