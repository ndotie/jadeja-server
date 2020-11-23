const router = require("express").Router();
const category = require("../controllers/serviceCategory");
router.get("/categories", category.getAllServicesCategory);
router.get("/categories/:id", category.getAllServicesSingleCategory);
router.post("/category", category.AddServiceCategory);
router.get("/category/:id", category.GetThisServiceCategory);
router.delete("/category/:id", category.DeleteServiceCategory);
router.put("/category/:id", category.UpdateServiceCategory);

module.exports = router;
