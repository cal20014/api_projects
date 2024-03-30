const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "QSO API Docs",
    description: "API documentation for QSO API",
  },
  host: "qsoapi.onrender.com",
  schemes: ["https"], // Using "http" for local development
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
