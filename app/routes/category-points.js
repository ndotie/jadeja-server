const fileupload = require("../utils/fileupload");
const router = require("express").Router();
const categoryPoint = require("../controllers/category-point");
router.get("/cat-points", categoryPoint.getAllCategoryPoints); //DONE
router.get("/cat-points/:id", categoryPoint.getAllPointsForCategory); //DONE
router.post("/cat-point", fileupload, categoryPoint.AddCategoryPoint); //DONE
router.get("/cat-point/:id", categoryPoint.GetThisCategoryPoint); //DONE
router.delete("/cat-point/:id", categoryPoint.DeleteCategoryPoint); //DONE
router.put("/cat-point/:id", categoryPoint.UpdateCategoryPoint); //DONE

module.exports = router;
