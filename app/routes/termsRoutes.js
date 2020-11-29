const terms = require("../controllers/termsController");
const router = require("express").Router();

router.get("/terms", terms.Retrieve);
router.post("/terms", terms.UpdateSocial);

module.exports = router;
