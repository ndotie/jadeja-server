const ServicesCategory = require("../models/service-category");
exports.AddServiceCategory = async (req, res) => {
  try {
    const response = await ServicesCategory.create({
      title: req.body.title,
      service_id: req.body.service_id,
      description: req.body.description,
    });
    res
      .status(201)
      .json({ success: "Category is successful created", payload: response });
  } catch (e) {
    //  console.log(e)
  }
};

exports.DeleteServiceCategory = async (req, res) => {
  //   console.log("reached ", req.params.id);
  try {
    await ServicesCategory.destroy({
      where: { id: req.params.id },
    });
    res
      .status(201)
      .json({ success: "successful service category deleted", payload: true });
  } catch (e) {
    // console.log(e)
  }
};

exports.UpdateServiceCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const response = ServicesCategory.update(req.body, {
      where: { id },
    });
    res.status(201).json({ success: true, contents: response });
  } catch (e) {}
};

exports.getAllServicesCategory = async (req, res) => {
  try {
    const response = await ServicesCategory.findAll();
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
  }
};

exports.GetThisServiceCategory = async (req, res) => {
  try {
    const response = await ServicesCategory.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
  }
};
exports.getAllServicesSingleCategory = async (req, res) => {
  try {
    const response = await ServicesCategory.findAll({
      where: {
        service_id: req.params.id,
      },
    });
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
  }
};

// exports.getOne = async (req, res) => {
//   try {
//     const response = await Services.findByPk(req.params.id);
//     res.status(200).json({ success: true, contents: response });
//   } catch (e) {
//     // console.log(e)
//   }
// };
