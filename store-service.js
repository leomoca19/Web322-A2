const fs = require('fs');
const path = require('path');

let itemsData = [];
let categoriesData = [];


function initialize() {
    return new Promise((resolve, reject) => {

        let itemsLoaded = false;
        let categoriesLoaded = false;

      fs.readFile(path.join(__dirname, 'data', 'items.json'), 'utf8', (err, itemsContent) => {
        if (err) {
          reject("Unable to read items file");
          return;
        }
        try {
          itemsData = JSON.parse(itemsContent);
        } catch (error) {
            reject("Unable to read items file");
            return;
        }
        if(itemsLoaded && categoriesLoaded){
          resolve();
        }
        fs.readFile(path.join(__dirname, 'data', 'categories.json'), 'utf8', (err, categoriesContent) => {
        if (err) {
            reject("Unable to read categories file");
            return;
        }
        try {
            categoriesData = JSON.parse(categoriesContent);
        } catch (error) {
            reject("Unable to read categories file");
            return;
        }
        if(categoriesLoaded && itemsLoaded){
            resolve();
         }
        });
      });
    });
}


//get all items + error handling
function getAllItems(){
    return new Promise((resolve,reject)=>{
        if(itemsData.length>0){
            resolve(itemsData);
        } else {
                reject("No results returned")
            }
        });
    }
//get all published items + error handling
function getPublishedItems() {
    return new Promise((resolve, reject) => {
        const publishedItems = itemsData.filter(item => items.published);
        if (publishedItems.length > 0) {
            resolve(publishedItems);
        } else {
            reject("No results returned");
        }
    });
}
//get categories + error handling
function getCategories(){
    return new Promise((resolve,reject)=> {
        if(categoriesData.length>0){
            resolve(categoriesData);
        }else{
            reject("No results returned")
        }
    });
}
// Route functions
function allItems() {
    return JSON.stringify(itemsData);
}

function allCategories() {
return JSON.stringify(categoriesData);
}
    
module.exports = {
    initialize,
    getAllItems,
    getPublishedItems,
    getCategories,
    allItems,
    allCategories
    };
          