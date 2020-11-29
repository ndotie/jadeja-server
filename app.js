require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const users = require("./app/routes/users");
const services = require("./app/routes/services");
const serviceCategory = require("./app/routes/service-category");
const categoryPoints = require("./app/routes/category-points");
const social = require("./app/routes/socialRoutes");
const slideShow = require("./app/routes/slidesRoutes");
const legals = require("./app/routes/legalRoutes");
const terms = require("./app/routes/termsRoutes");
const adminRouters = require("./app/routes/adminRoutes");
const path = require("path");
const jwt = require("jsonwebtoken");
var cors = require("cors");
const auth = require("./app/utils/authToken");
const port = 5050;
app.use(cors());

app.use(fileUpload());
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.static("build"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//Settting static files

app.use(users); //using users functionality
app.use(services);
app.use(serviceCategory);
app.use(categoryPoints);
app.use(social);
app.use(slideShow);
app.use(legals);
app.use(terms);
app.use(adminRouters);
app.post("/login", (req, res) => {
  const username = req.body.username;
  console.log(username);
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});
app.post("/stupid", auth, (req, res) => {
  if (req.body.user == req.user) {
    res.send("We're fuking good");
  } else {
    res.send("We suck");
  }
});
app.post("/stupid1", auth, (req, res) => {
  res.send(req.user);
});
app.post("/stupid2", auth, (req, res) => {
  res.send(req.body.user);
});

app.listen(port, () => console.log(`listening on port ${port}`));
