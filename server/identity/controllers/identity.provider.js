const IdentityModel = require("../../models/identity");
const HomeModel = require("../../models/homes");
const config=require("../../env.config")
const bcrypt = require("bcrypt");
exports.insert = (req, res) => {
  let salt = bcrypt.genSaltSync(16).toString();
  let hash = bcrypt.hash(req.body.password, salt, null);

  HomeModel.createIdentity({
    homeId: JSON.parse(JSON.stringify(req.body)).homeId
  }).then(result => {
    HomeModel.findByHomeId(JSON.parse(JSON.stringify(req.body)).homeId)
      .then(result => {
        if (result === null) {
          res
            .status(201)
            .send({ err: "Cannot Find your Home Code , Please verify it !" });
        } else { 
          hash.then(rsult => {
            req.body.password = salt + "@" + rsult.toString("base64");
            req.body.permissionLevel = config.permissionLevels.Master;
            IdentityModel.createIdentity(req.body)
              .then(result => {
                HomeModel.removeById(
                  JSON.parse(JSON.stringify(req.body)).homeId
                ).then(result => {
                  res.status(201).send({ id: result._id });
                });
              })
              .catch(err => {
                res.status(201).send({ err: "E-Mail Already In Use!" });
              });
          });
        }
      })
      .catch(err => {
        res.status(201).send({ err: err });
      });
  });
};
exports.insertNewUser = (req, res) => {
  let salt = bcrypt.genSaltSync(16).toString();
  let hash = bcrypt.hash(req.body.password, salt, null);

  hash.then(rsult => {
    req.body.password = salt + "@" + rsult.toString("base64");
    IdentityModel.createIdentity(req.body)
      .then(result => {
        res.status(201).send({ success: "Register was successful" });
      })
      .catch(err => {
        res.status(201).send({ success: "E-Mail Already In Use!" });
      })
      .catch(err => {
        res.status(201).send({ success: "Register failed. Please try again!" });
      });
  });
};

exports.list = (req, res) => {
  let limit =
    req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  IdentityModel.list(limit, page).then(result => {
    res.status(200).send(result);
  });
};

exports.getById = (req, res) => {
  IdentityModel.findById(req.params.userId).then(result => {
    res.status(200).send(result);
  });
};

exports.putById = (req, res) => {
  if (req.body.password) {
    let salt = bcrypt.genSaltSync(16).toString();
    let hash = bcrypt.hash(req.body.password, salt, null).toString("base64");
    req.body.password = salt + "@" + hash;
  }
  IdentityModel.putIdentity(req.params.userId, req.body).then(result => {
    req.status(204).send({});
  });
};

exports.patchById = (req, res) => {
  if (req.body.password) {
    let salt = bcrypt.genSaltSync(16).toString();
    let hash = bcrypt.hash(req.body.password, salt, null).toString("base64");
    req.body.password = salt + "@" + hash;
  }
  IdentityModel.patchIdentity(req.params.userId, req.body).then(result => {
    res.status(204).send({});
  });
};

exports.removeById = (req, res) => {
  IdentityModel.removeById(req.params.userId).then(result => {
    res.status(204).send({});
  });
};
