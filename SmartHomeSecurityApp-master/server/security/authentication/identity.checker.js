const IdentityModel = require("../../models/identity");
const uuidv4 = require("uuid/v4");
const validityTime = require("../../env.config.js").jwtValidityTimeInSeconds;

const refreshSecret = require("../../env.config.js").actualRefreshSecret;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const fs = require("fs");

const cert = fs.readFileSync("./tls/token-key.pem");

exports.hasAuthValidFields = (req, res, next) => {
  let errors = [];
  if (req.body) {
    if (!req.body.email) {
      errors.push("Missing email field");
    }
    if (!req.body.password) {
      errors.push("Missing password field");
    }
    if (errors.length) {
      return res.status(400).send({ errors: errors.join(",") });
    } else {
      return next();
    }
  } else {
    return res
      .status(400)
      .send({ errors: "Missing email and password fields" });
  }
};

const bcrypt = require("bcrypt");
exports.isPasswordAndUserMatch = (req, res, next) => {
  IdentityModel.findByEmail(req.body.email)
    .then(user => {
      let passwordFields = user[0].password.split("@");
      let salt = passwordFields[0];
      let hash = bcrypt.hash(req.body.password, salt, null);
      hash.then(result => {
        if (result.toString("base64") === passwordFields[1]) {
          var now = Math.floor(Date.now() / 1000);
          req.body = {
            iss: "urn:kaaniche.xyz",
            aud:
              "urn:" + (req.get("origin") ? req.get("origin") : "kaaniche.xyz"),
            sub: user[0].email,
            name: user[0].firstName + " " + user[0].lastName,
            userId: user[0]._id,
            roles: user[0].permissionLevel,
            jti: uuidv4(),
            iat: now,
            exp: now + validityTime
          };

          try {
            let refreshId = req.body.userId + refreshSecret + req.body.jti;
            let salt = crypto.randomBytes(16).toString("base64");
            let hash = crypto
              .createHmac("sha512", salt)
              .update(refreshId)
              .digest("base64");
            let token = jwt.sign(req.body, cert, { algorithm: "RS512" });
            let b = Buffer.from(hash);
            let refresh_token = salt + "@" + b.toString("base64");
            return res
              .status(201)
              .send({
                userName: user[0].userName,
                homeId: user[0].homeId,
                address: user[0].address,
                permissionLevel: user[0].permissionLevel,
                accessToken: token,
                refreshToken: refresh_token
              });
          } catch (err) {
            return res.status(500).send({ errors: err });
          }
        } else {
          return res.status(400).send({ errors: ["Invalid password"] });
        }
      });
    })
    .catch(err => {
      res.status(201).send({ errors: ["Invalid email"] });
    });
};

exports.isUserStillExistsWithSamePrivileges = (req, res, next) => {
  IdentityModel.findByEmail(req.body.sub).then(user => {
    if (!user[0]) {
      res.status(404).send({});
    }
    req.body.roles = user[0].permissionLevel;
    return next();
  });
};
