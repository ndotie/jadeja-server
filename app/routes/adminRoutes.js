const Admin = require("../controllers/adminController");
const router = require("express").Router();
router.post("/admin/login", Admin.getAdmin);
router.post("/admin/register", Admin.AddAdmin);
router.delete("/admin/delete", Admin.deleteAdmin);

module.exports = router;
