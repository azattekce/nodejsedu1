const express=require("express");
const { send } = require("process");
const https=require("https");
const app=express();

const bodyParser=require("body-parser");
const { response } = require("express");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){   
    
    res.sendFile(__dirname+"/signup.html");

});

app.post("/",function(req,res){

    var _firstNameInput=req.body.firstNameInput;
    
    var _lastNameInput=req.body.lastNameInput;
    
    var _mailInput=req.body.mailInput;



    console.log(_firstNameInput);

});

app.listen(process.env.PORT ||3002,function(){
    console.log("Server is runing on port 3000");   

});