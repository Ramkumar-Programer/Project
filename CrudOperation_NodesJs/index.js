var express = require("express");
var app = express();
const mongoose = require("./config/db.connection");
var user_routes = require('./routes/user.routes');
var user_rouresupdateArray = require('./routes/user.routesupdate');
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




app.get('/', function(req, res){
    res.send("Haiiiiii");
});

app.use('/userapi', user_routes);
app.use('/userarr', user_rouresupdateArray);

app.listen(8011, function(){
    console.log("listining to port");
});