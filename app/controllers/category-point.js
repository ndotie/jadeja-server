const CategoryPoint = require("../models/categoryPoint");
exports.AddCategoryPoint = async (req, res) => {
  try {
    const response = await CategoryPoint.create({
      title: req.body.title,
      service_id: req.body.service_id,
      description: req.body.description,
      category_id: req.body.category_id,
      picture: req.uploaded.filePath,
    });
    res.status(201).json({
      success: "Point created successful is successful created",
      payload: response,
    });
  } catch (e) {
    //  console.log(e)
  }
};

exports.DeleteCategoryPoint = async (req, res) => {
  //   console.log("reached ", req.params.id);
  try {
    await CategoryPoint.destroy({
      where: { id: req.params.id },
    });
    res
      .status(201)
      .json({ success: "successful category point deleted", payload: true });
  } catch (e) {
    // console.log(e)
  }
};

exports.UpdateCategoryPoint = async (req, res) => {
  try {
    const id = req.params.id;
    const response = CategoryPoint.update(req.body, {
      where: { id },
    });
    res.status(201).json({ success: true, contents: response });
  } catch (e) {}
};

exports.getAllCategoryPoints = async (req, res) => {
  try {
    const response = await CategoryPoint.findAll();
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
  }
};

exports.GetThisCategoryPoint = async (req, res) => {
  try {
    const response = await CategoryPoint.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
  }
};
exports.getAllPointsForCategory = async (req, res) => {
  try {
    const response = await CategoryPoint.findAll({
      where: {
        category_id: req.params.id,
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
