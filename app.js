const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    res.send("Message deliverd");
   var message = req.body.message;
   var email = req.body.email;
   fs.appendFileSync(__dirname+"/data.txt","\nMessage is :- "+message+"\n Sent by:- "+email)
})

app.listen(process.env.PORT || 3000, function(){
    console.log("server started at port 3000")
})