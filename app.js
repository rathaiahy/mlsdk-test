var express = require("express");
var compression = require("compression");

var app = express();
app.use(compression());
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello, from page performance tweaking app!");
});
app.listen(4000, function () {
  console.log("App listening on port 4000!");
});

console.log(__dirname);
app.use(
  "/scripts/magicbook-client",
  express.static(__dirname + "/node_modules/@magiclabs.ai/magicbook-client")
);
