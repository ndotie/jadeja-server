const router = require("express").Router();
const social = require("../controllers/socialController");
router.post("/social/update", social.UpdateSocial);
router.get("/social/retrieve", social.Retrieve);
// router.get("/categories/:id", category.getAllServicesSingleCategory);
// router.post("/category", category.AddServiceCategory);
// router.get("/category/:id", category.GetThisServiceCategory);
// router.delete("/category/:id", category.DeleteServiceCategory);
// router.put("/category/:id", category.UpdateServiceCategory);

module.exports = router;
