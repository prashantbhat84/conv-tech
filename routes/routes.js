const express = require('express');
const router = express.Router();
const { hc } = require("../controller/route")

router.post("/hc", hc)

module.exports = router