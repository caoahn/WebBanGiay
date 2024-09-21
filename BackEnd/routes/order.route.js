const express = require("express"); // khai báo expess để sử dụng route có sẵn
const router = express.Router();
const { protect, admin } = require("../middleware/auth.middleware");

const controller = require("../controllers/order.controller");

router.post("/", protect, controller.createOrder);

router.get("/all", protect, admin, controller.getAllOrders);

router.get("/", protect, controller.getUserOrders);

router.get("/:id", protect, controller.getOrderById);

router.put("/:id/pay", protect, controller.updateOrderToPaid);

router.put("/:id/deliver", protect, admin, controller.updateOrderToDelivered);

module.exports = router;
