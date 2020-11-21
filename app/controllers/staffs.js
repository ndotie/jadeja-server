const Staffs = require("../models/staffs_tb");
exports.AddStaff = async (req, res, next) => {
  console.log(req);
  try {
    const response = await Staffs.create({
      name: req.body.name,
      position: req.body.position,
      description: req.body.description,
    });
    console.log(JSON.stringify(req.files));
    res
      .status(201)
      .json({ success: "Staff is successful created", payload: response });
  } catch (e) {
    console.log("just error");
    console.log(e);
  }
};

exports.getAllStaffs = async (req, res) => {
  try {
    const response = await Staffs.findAll();
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    console.log("just error");
    console.log(e);
    res.status(401).json({ success: false, data: null, message: e });
  }
};

exports.deleteStaff = (req, res, next) => {};
