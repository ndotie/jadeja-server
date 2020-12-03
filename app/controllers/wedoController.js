const Wedo = require("../models/what-we-do");
exports.AddWeDo = async (req, res, next) => {
  try {
    const rest = await Wedo.create({
      icon: req.body.icon,
      title: req.body.title,
      brief: req.body.brief,
      readmore: req.body.readmore,
    });

    res.status(201).json({ success: true, contents: "Added successful" });
  } catch (e) {
    console.log(e);
    res.status(401).json({ success: false, contents: "Failed to be added!" });
  }
};

exports.getWedo = async (req, res, next) => {
  try {
    const resp = await Wedo.findAll();
    res.status(200).json({ success: true, contents: resp });
  } catch (e) {
    console.log(e);
    res.status(401).json({ success: false, contents: null });
  }
};

exports.DeleteWeDo = async (req, res, next) => {
  try {
    const resp = await Wedo.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ success: true, contents: "Deleted successful" });
  } catch (e) {
    console.log(e);
    res.status(200).json({ success: false, contents: "Failed to be deleted" });
  }
};
