var express = require("express");
var app = express();

app.set('view engine', 'ejs');

var server = app.listen(3000, function(){
    console.log("start :" + server.address().port);
});

app.get("/", function(req, res, next){
    res.render("index", {title: "タイトル"});
});
