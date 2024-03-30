const { body, validationResult } = require("express-validator");

const validate = {};

const modes = [
  "AM",
  "CW",
  "FM",
  "FT4",
  "FT8",
  "JS8",
  "JT65",
  "JT9",
  "PSK31",
  "RTTY",
  "SSTV",
  "LSB",
  "SSB",
  "USB",
  "VHF",
];

validate.validateContact = [
  body("callSign")
    .notEmpty()
    .withMessage("Call sign is required")
    .isLength({ min: 3, max: 10 })
    .withMessage("Call sign must be between 3 and 10 characters long."),

  body("name")
    .optional()
    .isLength({ min: 1 })
    .withMessage("Name must be less than 100 characters long")
    .isString()
    .withMessage("Name must be a string"),

  body("date")
    .notEmpty()
    .withMessage("Date is required")
    .matches(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/)
    .withMessage("Date must be in the format DD-MM-YYYY"),

  body("time")
    .notEmpty()
    .withMessage("Time is required")
    .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("Time must be in the format HH:MM"),

  body("frequency")
    .notEmpty()
    .withMessage("Frequency is required")
    .isNumeric()
    .withMessage("Frequency must be a number")
    .isFloat({ min: 0 })
    .withMessage("Frequency should be a positive number"),

  body("mode")
    .notEmpty()
    .withMessage("Mode is required")
    .isString()
    .withMessage("Mode must be a string")
    .isIn(modes)
    .withMessage("Mode must be one of the following: " + modes.join(", ")),

  body("rstSent")
    .notEmpty()
    .withMessage("RST Sent is required")
    .isNumeric()
    .withMessage("RST Sent must be a number")
    .isLength({ min: 2, max: 3 })
    .withMessage("RST Sent can only be a min of 2 max of 3 characters long"),

  body("rstReceived")
    .notEmpty()
    .withMessage("RST Received is required")
    .isNumeric()
    .withMessage("RST Received must be a number")
    .isLength({ min: 2, max: 3 })
    .withMessage(
      "RST Received can only be a min of 2 max of 3 characters long"
    ),

  body("gridSquare")
    .notEmpty()
    .withMessage("Grid square is required")
    .isLength({ min: 4, max: 6 })
    .withMessage("Grid square must be between 4 and 6 characters long"),

  body("notes")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Notes must be less than 500 characters long"),
];

validate.validateDelete = [
  body("id")
    .exists()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("ID must be a valid MongoID"),
];

validate.validateUpdate = [
  body("callSign")
    .notEmpty()
    .isLength({ min: 3, max: 10 })
    .withMessage("Call sign must be between 3 and 10 characters long."),

  body("name")
    .notEmpty()
    .isLength({ min: 1 })
    .withMessage("Name must be less than 100 characters long")
    .isString()
    .withMessage("Name must be a string"),

  body("date")
    .notEmpty()
    .matches(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/)
    .withMessage("Date must be in the format DD-MM-YYYY"),

  body("time")
    .notEmpty()
    .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("Time must be in the format HH:MM"),

  body("frequency")
    .notEmpty()
    .isNumeric()
    .withMessage("Frequency must be a number")
    .isFloat({ min: 0 })
    .withMessage("Frequency should be a positive number"),

  body("mode")
    .notEmpty()
    .isString()
    .withMessage("Mode must be a string")
    .isIn(modes)
    .withMessage("Mode must be one of the following: " + modes.join(", ")),

  body("rstSent")
    .notEmpty()
    .isLength({ min: 2, max: 3 })
    .withMessage("RST Sent can only be a min of 2 max of 3 characters long"),

  body("rstReceived")
    .notEmpty()
    .isLength({ min: 2, max: 3 })
    .withMessage(
      "RST Received can only be a min of 2 max of 3 characters long"
    ),

  body("gridSquare")
    .notEmpty()
    .isLength({ min: 4, max: 6 })
    .withMessage("Grid square must be between 4 and 6 characters long"),

  body("notes")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Notes must be less than 500 characters long"),
];

validate.validateId = [
  body("id")
    .exists()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("ID must be a valid MongoID"),
];

module.exports = validate;
