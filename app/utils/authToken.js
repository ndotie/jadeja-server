const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (typeof authHeader !== undefined) {
    const token = authHeader && authHeader.split(" ")[1];
    // console.log(token);
    if (token == null) {
      return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err);
      if (err) return res.sendStatus(403);
      //   console.log(user);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(403);
  }
};
