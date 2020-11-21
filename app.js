const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const users = require("./app/routes/users");
var cors = require("cors");
const port = 5050;
app.use(fileUpload());
app.use(cors());
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  console.log("Works fine");
});
app.use(users); //using users functionality

app.listen(port, () => console.log(`listening on port ${port}`));
