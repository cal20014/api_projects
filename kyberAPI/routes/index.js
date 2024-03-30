const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middleware/auth");
const dotenv = require("dotenv");
dotenv.config();

const kyberDataRoutes = require("./kyberDataRoutes");
const swagger = require("./swaggerRoutes");

// Routes
router.use("/kyberData", kyberDataRoutes);
router.use("/api-docs", swagger);

module.exports = router;
