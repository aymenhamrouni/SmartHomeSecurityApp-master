const jwt = require("jsonwebtoken"),
  refreshSecret = require("../../env.config.js").actualRefreshSecret,
  crypto = require("crypto");
fs = require("fs");

const cert = fs.readFileSync("./tls/token-public-key.pem");

exports.validJWTNeeded = (req, res, next) => {
  if (req.headers["authorization"]) {
    try {
      let authorization = req.headers["authorization"].split(" ");
      if (authorization[0] !== "Bearer") {
        return res.status(401).send();
      } else {
        var aud =
          "urn:" + (req.get("origin") ? req.get("origin") : "kaaniche.xyz");

        req.jwt = jwt.verify(authorization[1], cert, {
          issuer: "urn:kaaniche.xyz",
          audience: aud,
          algorithms: ["RS512"]
        });
        return next();
      }
    } catch (err) {

      return res.status(403).send({ err , err });
    }
  } else {
    return res.status(401).send();
  }
};


exports.checkValidJWT = (req, res) => {
    if (req.headers["authorization"]) {
      try {
        let authorization = req.headers["authorization"].split(" ");
        if (authorization[0] !== "Bearer") {
          return res.status(401).send();
        } else {
          var aud =
            "urn:" + (req.get("origin") ? req.get("origin") : "kaaniche.xyz");
  
          req.jwt = jwt.verify(authorization[1], cert, {
            issuer: "urn:kaaniche.xyz",
            audience: aud,
            algorithms: ["RS512"]
          });
          return res.status(201).send({ ValidJWT: "True" });
        }
      } catch (err) {
        return res.status(201).send({ ValidJWT: "False" });
      }
    } else {
      return res.status(401).send();
    }
  };

exports.verifyRefreshBodyField = (req, res, next) => {
  if (req.body && req.body.refresh_token) {
    return next();
  } else {
    return res.status(400).send({ error: "need to pass refresh_token field" });
  }
};

exports.validRefreshNeeded = (req, res, next) => {
  let deco = req.body.refresh_token.toString().split("@");

  let salt = deco[0];
  let a = deco[1];
  let b = Buffer.from(a, "base64");
  let refresh_token = b.toString();

  let hash = crypto
    .createHmac("sha512", salt)
    .update(req.jwt.userId + refreshSecret + req.jwt.jti)
    .digest("base64");

  if (hash === refresh_token) {
    req.body = req.jwt;
    return next();
  } else {
    return res.status(400).send({ error: "Invalid refresh token" });
  }
};
