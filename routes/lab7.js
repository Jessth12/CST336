var express = require('express');
var router = express.Router();
var request = require("request");

// routes
router.get("/", async function(req, res){
    
    let parsedData = await getImages("otters");
    
    console.dir("parsedData: " + parsedData); //displays content of the object
       
    res.render("index", {"image":parsedData.hits[0].largeImageURL});
               
   }); //root route87u9o00T5
   
   
router.get("/results", async function(req, res){
       
       //console.dir(req);
       let keyword = req.query.keyword; //gets the value that the user typed in the form using the GET method
       
       let parsedData = await getImages(keyword);
   
       res.render("results", {"images":parsedData});
       
   });//results route
   
   
//Returns all data from the Pixabay API as JSON format
function getImages(keyword){
    return new Promise( function(resolve, reject){
        request('https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q='+keyword,
            function (error, response, body) {
               if (!error && response.statusCode == 200  ) { //no issues in the request
                   
                    let parsedData = JSON.parse(body); //converts string to JSON
                    
                    resolve(parsedData);
                   
                   //let randomIndex = Math.floor(Math.random() * parsedData.hits.length);
                   //res.send(`<img src='${parsedData.hits[randomIndex].largeImageURL}'>`);
                   //res.render("index", {"image":parsedData.hits[randomIndex].largeImageURL});
                   
               } else {
                   reject(error);
                   console.log(response.statusCode);
                   console.log(error);
               }
        });//request
      
    });
}

module.exports = router;