const express = require("express");
const router = express.Router();

const petitionController = require("../controllers/petitionController");

router.post("/", petitionController.generatePetition);

module.exports = router;