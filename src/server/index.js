const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();
// app.use(express.static("dist"));

// Setup basic midleware
app.use(bodyParser.json());
app.use(cors());

// Setup routes
app.use(routes);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
