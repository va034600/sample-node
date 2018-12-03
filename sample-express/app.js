var express = require("express");
var app = express();

var server = app.listen(3000, function(){
    console.log("start :" + server.address().port);
});

app.get("/", function(req, res, next){
    res.json({
        id: 1,
        name: "nameAb"
    });
});
