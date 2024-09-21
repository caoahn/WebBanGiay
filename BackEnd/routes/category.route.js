const express = require("express"); // khai báo expess để sử dụng route có sẵn
const router = express.Router();
const { protect, admin } = require("../middleware/auth.middleware");

const controller = require("../controllers/category.controller");

router.get("/", controller.index);

router.get("/all", protect, admin, controller.all);

router.post("/", protect, admin, controller.create);

router.delete("/:id", protect, admin, controller.delete);

router.get("/:id", protect, admin, controller.show);

router.patch("/:id", protect, admin, controller.update);

module.exports = router;
