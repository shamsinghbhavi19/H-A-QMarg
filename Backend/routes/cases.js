const express = require("express");
const router = express.Router();

const casesController = require("../controllers/casesController");

router.get("/", casesController.getCases);

router.get("/:type", casesController.getCaseByType);

module.exports = router;