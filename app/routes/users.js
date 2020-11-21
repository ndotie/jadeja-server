const router = require("express").Router();
const users = require("../controllers/staffs");
const fileupload = require("../utils/fileupload");
router.get("/users", users.getAllStaffs);
router.post("/users", fileupload, users.AddStaff);
router.post("/users/delete/:id", users.deleteStaff);

module.exports = router;
