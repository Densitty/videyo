"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require("express");
var app = (0, _express["default"])();
app.get("/", function (req, res) {
  console.log("serving videos");
  res.send("<h1>Rush Hour</h1>");
});
app.get("/movie", function (req, res) {
  console.log("get the movie, firecrackers");
  res.send("<h1>Fiecrackers</h1>");
});
app.listen(3000, function () {
  console.log("Listening on port " + 3000);
});