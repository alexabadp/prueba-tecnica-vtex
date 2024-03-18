const { Router } = require("express");

const productRouter = require("./products")

const router = Router();

router.use("/product", productRouter)

module.exports = router;