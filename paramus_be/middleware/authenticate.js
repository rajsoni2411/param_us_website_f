const jwt = require("jsonwebtoken");
const { TokenExpiredError } = jwt;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).json({ message: "Invalid token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json(catchError(err));
    }
    delete decoded.iat;
    delete decoded.exp;

    req.tokenData = decoded;
    next();
  });
};

const catchError = (err) => {
  if (err instanceof TokenExpiredError) {
    return {
      isTokenValid: false,
      message: "Unauthorized! Access Token was expired!",
    };
  }
  return { isTokenValid: false, message: "Unauthorized!" };
};

module.exports = {
  authenticateToken,
};
