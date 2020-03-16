/*tp use ejs

1. every ejs file has an extension .ejs
node js looks into a folder views to render a page 
tell node js to use ejs as page rendering engine
*/

var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');


app.get("/", function(req,res){
        res.render("home");
    });
    
var friendList = ["Alice", "Clark", "Bellany"];
app.get("/friends", function(req,res){
        res.render("friends", {friends: friendList});
    });
    
app.post("/addfriend", function(req,res){
    var newFriend = req.body.newfriend;
    friendList.push(newFriend);
    res.redirect("/friends");
       
});
    
app.get("*", function(req,res){
        res.render("error");
});

app.listen(process.env.PORT, function(){
    console.log("server is running..");
});