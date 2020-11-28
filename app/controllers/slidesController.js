const Slides = require("../models/slideShow");
const router = require("express").Router();
router.addSlide = async (req, res) => {
  try {
    const response = await Slides.create({
      service_id: req.body.service_id,
      brief: req.body.brief,
      title: req.body.title,
      slide_no: req.body.slide_no,
    });
    res.status(201).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
    res.status(204).json({ success: false, contents: "Fail to create" });
  }
};

router.updateSlide = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Slides.update(req.body, {
      where: { id },
    });
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
    res.status(204).json({ success: false, contents: "Fail to update" });
  }
};

router.deleteSlide = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Slides.destroy({ where: { id } });
    res
      .status(201)
      .json({ success: true, content: "record deleted successful" });
  } catch (e) {
    // console.log(e)
    res
      .status(204)
      .json({ success: false, contents: "failed to delete record" });
  }
};

router.getAll = async (req, res) => {
  try {
    const response = await Slides.findAll();
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    // console.log(e)
    res.status(204).json({ success: false, contents: "Fail to get records" });
  }
};

router.getThisOne = async (req, res) => {
  try {
    const response = await Slides.findByPk(req.params.id);
    res.status(200).json({ success: true, contents: response });
  } catch (e) {
    res.status(204).json({ success: false, contents: "Fail to retrieve" });
  }
};

module.exports = router;
