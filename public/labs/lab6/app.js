const express = require("express");
const app = express();

//creating routes
app.get("/", function(req,res){
    res.sent("it works!");
});

//server listener 
app.listen("8081", );