/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
*  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Leonardo de la Mora Caceres Student ID: 152877205 Date: 02-June-2023
*
*  Online (Cyclic) Link: https://busy-jade-hen-belt.cyclic.app/
*
********************************************************************************/ 
const express = require('express');
const storeService = require('./store-service');
const app = express();
const port = process.env.PORT || 8080;


storeService.initialize()
  .then(() => {
    // Initialization successful, start the server
    app.listen(HTTP_PORT, () => {
      console.log("Express http server listening on port", HTTP_PORT);
    });

    // Calls all items
    storeService.getAllItems()
      .then(items => {
        console.log("All Items:", items);
      })
      .catch(error => {
        console.log("Error:", error);
      });

    // Calls published items
    storeService.getPublishedItems()
      .then(publishedItems => {
        console.log("Published Items:", publishedItems);
      })
      .catch(error => {
        console.log("Error:", error);
      });

    // Calls categories
    storeService.getCategories()
      .then(categories => {
        console.log("Categories:", categories);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  })
  .catch(error => {
    // Initialization failed, output the error to the console
    console.error("Initialization Error:", error);
  });


// Middleware for automaticly serving static files in public
app.use(express.static('public'));

//Redirecting to "/about"
app.get('/', (req, res) => {
    res.redirect('/about');
});

//Serving about.html
app.get('/about', (req, res)=>{
    res.sendFile(`${__dirname}/views/about.html`);
});

// Route for returning published items
app.get("/shop", (req, res) => {
    storeService.getPublishedItems()
      .then(publishedItems => {
        res.send(JSON.stringify(publishedItems));
      })
      .catch(error => {
        res.status(500).send("Error: " + error);
      });
  });

// Route for returning all items
app.get("/items", (req, res) => {
    storeService.getAllItems()
      .then(items => {
        res.send(JSON.stringify(items));
      })
      .catch(error => {
        res.status(500).send("Error: " + error);
      });
  });

// Route for returning all categories
app.get("/categories", (req, res) => {
    storeService.getCategories()
    .then(Categories => {
      res.send(JSON.stringify(Categories));
    })
    .catch(error => {
      res.status(500).send("Error: " + error);
    });
});

// 404 error- page not found
app.use((req, res) => {
    res.status(404).send("404 - Page not found");
    });

//Store return of listen if later closing the server explicitly: const server = app...
const server = app.listen(port, () => {
    console.log(`Express http server listening on port ${port}`);
});