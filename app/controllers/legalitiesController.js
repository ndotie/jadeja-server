const Legal = require("../models/legalities");
exports.AddLegal = async (req, res) => {
  try {
    const response = await Legal.create({
      title: req.body.title,
      value: req.body.value,
    });
    res
      .status(201)
      .json({ success: "Legal is successful created", payload: response });
  } catch (e) {
    //  console.log(e)
  }
};

exports.deleteLegal = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(401)
        .json({ success: false, contents: "Id is required to delete an item" });
    const resp = await Legal.destroy({ where: { id } });
    res
      .status(201)
      .json({ success: true, message: "Legal value deleted successfully" });
  } catch (e) {
    // console.log(e)
  }
};

exports.updateLegal = async (req, res) => {
  try {
    const { id } = req.params; //getting the id of the params passed thru url
    if (!id)
      return res
        .status(401)
        .json({ success: false, contents: "Id is required to update an item" });
    const resp = await Legal.update(req.body, { where: { id } });
    res
      .status(201)
      .json({
        success: true,
        contents: resp,
        message: "You've successful updated the legal value",
      });
  } catch (e) {}
};

exports.getSingleLegal = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      const resp = await Legal.findAll(); //getting all the values we need
      res
        .status(200)
        .json({
          success: true,
          contents: resp,
          message: "retrieved all the required legal values successfully",
        });
    } else {
      const resp = await Legal.findByPk(id);
      res
        .status(200)
        .json({
          success: true,
          contents: resp,
          message: "retrieved this Legal value successful",
        });
    }
  } catch (e) {}
};

exports.getAllLegals = async (req, res) => {
  try {
    const resp = await Legal.findAll(); //getting all the values we need
    res
      .status(200)
      .json({
        success: true,
        contents: resp,
        message: "retrieved all the required legal values successfully",
      });
  } catch (e) {}
};
