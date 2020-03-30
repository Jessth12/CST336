const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//creating routes
app.get("/", function(req,res){
    res.render("index.html");
});

//server listener 
app.listen("8081", "127.0.0.1", function(){
    console.log("Express server is Running...");
});

app.get("/mercury", function(req,res){
    res.send("This will be Mercury page!");
});

app.get("/venus", function(req,res){
    res.send("This will be Venus page!");
});

