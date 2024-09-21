const express = require("express"); // khai báo expess để sử dụng route có sẵn
const router = express.Router();
const { protect, admin } = require("../middleware/auth.middleware"); // khai báo protect và admin để sử dụng middleware

const controller = require("../controllers/product.controller");

router.get("/", controller.index);

router.get("/all", protect, admin, controller.all); // admin

router.get("/:id", controller.get);

router.post("/:id/review", protect, controller.review); // protect

router.delete("/:id", protect, admin, controller.delete);

router.post("/", protect, admin, controller.create);

router.patch("/:id", protect, admin, controller.update);

module.exports = router;
