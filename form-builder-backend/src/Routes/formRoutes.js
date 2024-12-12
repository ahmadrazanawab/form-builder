const express = require("express");
const router = express.Router();
const formController = require("../controller/formController");

router.post("/forms", formController.createForm);
router.get("/forms/:id", formController.getForm);

module.exports = router;
