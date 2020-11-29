const LegalController = require("../controllers/legalitiesController");
const router = require("express").Router(); //getting the router from the ... express framework
router.post("/legal", LegalController.AddLegal); //We're creating a legal value in here
router.get("/legal/:id", LegalController.getSingleLegal); //Getting a single legal value
router.get("/legals", LegalController.getAllLegals); //getting all the the legal values
router.delete("/legal/:id", LegalController.deleteLegal); //deleting a single legal value
router.put("/legal/:id", LegalController.updateLegal); //updating this single legal value

module.exports = router;
