const express = require("express");
const glboalControllers = require("../Controllers/globalController");

const router = express.Router();

router.get("/", glboalControllers.indexController);

router.get("/intro", glboalControllers.introController);

router.get("/product", glboalControllers.productController);

module.exports = router;