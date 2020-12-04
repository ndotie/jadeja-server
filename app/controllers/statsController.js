const Stats = require("../models/stats");
exports.AddStats = async (req, res, next) => {
  try {
    const rest = await Stats.create({
      icon: req.body.icon,
      title: req.body.title,
      countings: req.body.countings,
    });

    res.status(201).json({ success: true, contents: "Added successful" });
  } catch (e) {
    console.log(e);
    res.status(401).json({ success: false, contents: "Failed to be added!" });
  }
};
exports.getStats = async (req, res, next) => {
  try {
    const resp = await Stats.findAll();
    res.status(200).json({ success: true, contents: resp });
  } catch (e) {
    console.log(e);
    res.status(401).json({ success: false, contents: null });
  }
};
exports.DeleteStats = async (req, res, next) => {
  try {
    const resp = await Stats.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ success: true, contents: "Deleted successful" });
  } catch (e) {
    console.log(e);
    res.status(200).json({ success: false, contents: "Failed to be deleted" });
  }
};
