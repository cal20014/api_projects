const express = require("express");
const router = express.Router();
const kyberDataController = require("../controllers/kyberDataController");
const utilities = require("../utilities/index");

// Routes

// GET all kyberData
router.get("/", utilities.handleErrors(kyberDataController.getAllKyberData));

// GET single kyberData by id
router.get(
  "/:id",
  utilities.handleErrors(kyberDataController.getKyberDataById)
);

// POST new kyberData
router.post("/", utilities.handleErrors(kyberDataController.addKyberData));

// PUT update kyberData
router.put("/:id", utilities.handleErrors(kyberDataController.updateKyberData));

// DELETE kyberData
router.delete(
  "/:id",
  utilities.handleErrors(kyberDataController.deleteKyberData)
);

module.exports = router;
