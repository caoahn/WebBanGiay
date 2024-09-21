const express = require("express"); // khai báo expess để sử dụng route có sẵn
const router = express.Router();
const { protect, admin } = require("../middleware/auth.middleware");

const controller = require("../controllers/user.controller");

router.post("/login", controller.login);

router.post("/", controller.register);

router.get("/profile", protect, controller.profile);

router.put("/profile", protect, controller.updateProfile);

router.get("/", protect, admin, controller.getAllUsers);

module.exports = router;
