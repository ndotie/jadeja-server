const commit = require("../controllers/commitController");
const router = require("express").Router();

router.get("/commit", commit.getCommits);
router.post("/commit", commit.AddCommit);
router.delete("/commit/:id", commit.DeleteCommit);

module.exports = router;
