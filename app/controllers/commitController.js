const Commit = require("../models/committment");
exports.AddCommit = async (req, res, next) => {
  try {
    const rest = await Commit.create({
      icon: req.body.icon,
      title: req.body.title,
      brief: req.body.brief,
    });

    res.status(201).json({ success: true, contents: "Added successful" });
  } catch (e) {
    console.log(e);
    res.status(401).json({ success: false, contents: "Failed to be added!" });
  }
};

exports.getCommits = async (req, res, next) => {
  try {
    const resp = await Commit.findAll();
    res.status(200).json({ success: true, contents: resp });
  } catch (e) {
    console.log(e);
    res.status(401).json({ success: false, contents: null });
  }
};

exports.DeleteCommit = async (req, res, next) => {
  try {
    const resp = await Commit.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ success: true, contents: "Deleted successful" });
  } catch (e) {
    console.log(e);
    res.status(200).json({ success: false, contents: "Failed to be deleted" });
  }
};
