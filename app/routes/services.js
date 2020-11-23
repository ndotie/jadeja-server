const router = require("express").Router();
const services = require("../controllers/services");
router.get("/services", services.getAllServices);
router.post("/service", services.AddService);
router.delete("/service/:id", services.DeleteService);
router.put("/service/:id", services.UpdateService);

router.get("/service/:id", services.getOne);

module.exports = router;
