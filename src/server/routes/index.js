var express = require("express");
var router = express.Router();
const _ = require("underscore");

router.get("/", function (req, res) {
  res.send({
    "project name": "Real Time Knowledge Management",
  });
});

router.get("/test", function (req, res) {
  res.send({
    X: _.random(0, 100),
    Y: _.random(0, 100),
  });
});

module.exports = router;
