const express = require("express")
var app = express();
const bodyparser = require("body-parser");
const path = require("path")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./router")
const cors = require("cors")

const port = 8080;

mongoose.set("strictQuery",true)
mongoose.promise = global.promise;

const url = "mongodb://0.0.0.0:27017/test"

mongoose.connect(url,{
    connectTimeoutMS:1000},
    function(err){
    if(err){
        console.log("error")
        console.log(err)
    }
    else{
        console.log("Connection Done With Mongo")
    }
})

app.use(bodyParser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cors('*'));
app.use("/",routes);

app.listen(port,()=>{"Server running on port:"+port})
module.exports = app;