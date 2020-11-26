const Staffs = require("../models/staffs_tb");
exports.AddStaff = async (req, res, next) => {
  try {
    const response = await Staffs.create({
      name: req.body.name,
      position: req.body.position,
      description: req.body.description,
      picture: req.uploaded.filePath,
    });
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

exports.deleteStaff = async (req, res, next) => {
  try {
    const { id } = req.params; //the id of the staff we're tryig to delete
    const response = await Staffs.destroy({
      where: { id },
    });
    res
      .status(201)
      .json({ success: true, data: null, message: "Successful deleted staff" });
  } catch (e) {
    console.log(e);
    res.status(401).json({
      success: false,
      data: null,
      message: "An error occured",
    });
  }
};
