const stats = require("../controllers/statsController");
const router = require("express").Router();

router.get("/stats", stats.getStats);
router.post("/stats", stats.AddStats);
router.delete("/stats/:id", stats.DeleteStats);

module.exports = router;
