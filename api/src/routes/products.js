const { Router } = require("express");
const { getDataProductsBySku } = require ("../controllers/product.js")

const router = Router();

router.get("/", getDataProductsBySku);

module.exports = router