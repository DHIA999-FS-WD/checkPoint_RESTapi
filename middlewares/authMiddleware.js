const jwt = require("jsonwebtoken");
// i make this middleware to protct our data
const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const decoded = jwt.verify(token, process.env.JWT);
      console.log("decoded", decoded);
      next();
    } catch (error) {
      console.log("error here", error);
    }
  }
};
module.exports = protect;
