const wedo = require("../controllers/wedoController");
const router = require("express").Router();
router.get("/wedo", wedo.getWedo);
router.post("/wedo", wedo.AddWeDo);
router.delete("/wedo/:id", wedo.DeleteWeDo);

module.exports = router;
