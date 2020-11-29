const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
exports.AddAdmin = async (req, res) => {
  try {
    const response = await Admin.create({
      title: req.body.password,
      value: req.body.username,
    });
    res
      .status(201)
      .json({ success: "Admin is successful created", payload: response });
  } catch (e) {
    //  console.log(e)
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(401)
        .json({ success: false, contents: "Id is required to delete an item" });
    const resp = await Admin.destroy({ where: { id } });
    res
      .status(201)
      .json({ success: true, message: "Legal value deleted successfully" });
  } catch (e) {
    // console.log(e)
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const resp = await Admin.findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    });
    if (!resp) {
      return res.status(401).json({ success: false, token: null });
    }
    //We've managed to get in
    const accessToken = jwt.sign(
      req.body.username,
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({ token: accessToken, success: true });
  } catch (e) {
    console.log(e);
  }
};
