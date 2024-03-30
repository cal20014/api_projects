// handleUnauthorizedError.js
function handleUnauthorizedError(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res
      .status(401)
      .send({
        msg: "Invalid token. Please make sure you are using a valid and unexpired authentication token.",
      });
  }

  next(err);
}

module.exports = handleUnauthorizedError;
