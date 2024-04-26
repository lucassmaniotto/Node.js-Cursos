const { Router } = require("express");
const { getIndex } = require("../controllers/index");

const router = Router();

router.get("/", getIndex);

module.exports = router;
