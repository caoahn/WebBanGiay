const express = require("express"); // khai báo expess để sử dụng route có sẵn
const router = express.Router();
const { protect, admin } = require("../middleware/auth.middleware"); // khai báo protect và admin để sử dụng middleware

const controller = require("../controllers/upload.controller");

router.post("/", protect, admin, controller.uploadImage);

router.post("/destroy", protect, admin, controller.deleteImage);

module.exports = router;
