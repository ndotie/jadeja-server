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
const path = require("path");

var cors = require("cors");
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

app.listen(port, () => console.log(`listening on port ${port}`));
