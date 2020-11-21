const router = require("express").Router();
const users = require("../controllers/staffs");
router.get("/users", users.getAllStaffs);
router.post("/users", users.AddStaff);
router.post("/users/delete/:id", users.deleteStaff);

module.exports = router;
