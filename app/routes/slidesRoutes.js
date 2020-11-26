const slidesController = require("../controllers/slidesController");
const router = require("express").Router();
router.get("/allslides", slidesController.getAll);
router.post("/slide", slidesController.addSlide);
router.put("/slide/:id", slidesController.updateSlide);
router.delete("/slide/:id", slidesController.deleteSlide);
router.get("/slide/:id", slidesController.getThisOne);

module.exports = router;
