const partners = require("../controllers/partnersController");
const router = require("express").Router();

router.get("/partners", partners.getPartners);
router.post("/partners", partners.AddPartners);
router.post("/partners/:id", partners.DeletePartners);

module.exports = router;
