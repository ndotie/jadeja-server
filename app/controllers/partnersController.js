const Partners = require("../models/partners");
exports.AddPartners = async (req, res, next) => {
  try {
    const rest = await Partners.create({
      picture: req.uploaded.fullPath,
    });

    res.status(201).json({ success: true, contents: "Added successful" });
  } catch (e) {
    console.log(e);
    res.status(401).json({ success: false, contents: "Failed to be added!" });
  }
};
exports.getPartners = async (req, res, next) => {
  try {
    const resp = await Partners.getAll();
    res.status(200).json({ success: true, contents: resp });
  } catch (e) {
    console.log(e);
    res.status(401).json({ success: false, contents: null });
  }
};
exports.DeletePartners = async (req, res, next) => {
  try {
    const resp = await Partners.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ success: true, contents: "Deleted successful" });
  } catch (e) {
    console.log(e);
    res.status(200).json({ success: false, contents: "Failed to be deleted" });
  }
};
