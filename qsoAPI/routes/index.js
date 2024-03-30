const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middleware/auth");
const { checkUser, checkManager } = require("../middleware/user");
const handleUnauthorizedError = require("../middleware/handleUnauthorizedError");

const contacts = require("./contactRoutes");
const userRoutes = require("./userRoutes");
const swagger = require("./swaggerRoutes");

// Routes
router.use("/user", checkJwt, checkUser, checkManager, userRoutes);
router.use("/contacts", checkJwt, checkUser, contacts);
router.use("/api-docs", swagger);

// Error handling middleware
router.use(handleUnauthorizedError);

module.exports = router;
