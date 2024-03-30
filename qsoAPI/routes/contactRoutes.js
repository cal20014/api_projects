const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactsController");
const utilities = require("../utilities");
const validate = require("../utilities/contactValidator");

// Routes

// GET
// get all contacts
router.get("/", utilities.handleErrors(contactController.getAllContacts));

// get single contact by id
router.get(
  "/:id",
  validate.validateId,
  utilities.handleErrors(contactController.getContactById)
);

// POST
router.post(
  "/",
  validate.validateContact,
  utilities.handleErrors(contactController.addContact)
);

// PUT
router.put(
  "/:id",
  validate.validateUpdate,
  utilities.handleErrors(contactController.updateContact)
);

// DELETE
router.delete(
  "/:id",
  validate.validateDelete,
  utilities.handleErrors(contactController.deleteContact)
);

module.exports = router;
