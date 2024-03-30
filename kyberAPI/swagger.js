const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "kyberAPI Docs",
    description: "API documentation for kyberData",
  },
  host: "kyberapi.onrender.com",
  schemes: ["https"], // Using "http" for local development
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
