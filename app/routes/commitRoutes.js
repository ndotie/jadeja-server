const commit = require("../controllers/commitController");
const router = require("express").Router();

router.get("/committ", commit.getCommits);
router.post("/committ", commit.AddCommit);
router.delete("/committ/:id", commit.DeleteCommit);

module.exports = router;
