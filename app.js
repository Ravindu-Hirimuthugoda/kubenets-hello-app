var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("<html><head><body><h1>Hello World!</h1></body></head></html>");
});

app.listen(port);
console.log(`Server is running on ${port}`);
