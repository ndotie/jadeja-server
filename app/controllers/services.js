const Services = require("../models/services");
exports.AddService = async (req, res) => {
  try {
    const response = await Services.create({ name: req.body.name });
    res
      .status(201)
      .json({ success: "Service is successful created", payload: response });
  } catch (e) {
    //  console.log(e)
  }
};

exports.DeleteService = async (req, res) => {
  console.log("reached ", req.params.id);
  try {
    await Services.destroy({
      where: { id: req.params.id },
    });
    res
      .status(201)
      .json({ success: "successful service deleted", payload: true });
  } catch (e) {
    // console.log(e)
  }
};

exports.UpdateService = async (req, res) => {
  try {
    const id = req.params.id;
    const response = Services.update(req.body, {
      where: { id },
    });
    res.status(201).json({ success: true, contents: response });
  } catch (e) {}
};

exports.getAllServices = async (req, res) => {
  try {
    const response = await Services.findAll();
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
  }
};

exports.getOne = async (req, res) => {
  try {
    const response = await Services.findByPk(req.params.id);
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
  }
};
