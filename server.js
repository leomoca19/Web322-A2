/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
*  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Leonardo de la Mora Caceres Student ID: 152877205 Date: 01-June-2023
*
*  Online (Cyclic) Link: https://busy-jade-hen-belt.cyclic.app/
*
********************************************************************************/ 
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const print = console.log();

// Middleware for automaticly serving static files in views
app.use(express.static('views'));

//store return of listen if later closing the server explicitly: const server = app...
app.listen(port, () => {
    print(`Express http server listening on port ${port}`);
});

//Redirecting to "/about"
app.get('/', (req, res) => {
    res.redirect('/about');
});

//Serving about.html
app.get('/about', (req, res)=>{
    res.sendFile(`${__dirname}/views/about.html`);
});