const refreshSecret = require('../../env.config.js').actualRefreshSecret;
const jwt = require('jsonwebtoken');
const validityTime = require('../../env.config.js').jwtValidityTimeInSeconds;
const crypto = require('crypto');
const fs = require('fs');

const cert = fs.readFileSync('./tls/token-key.pem');

exports.refresh_token = (req, res) => {
    try {
        var now = Math.floor(Date.now() / 1000);
        req.body.iat = now;
        req.body.exp = now + validityTime;
        let token = jwt.sign(req.body,cert, { algorithm: 'RS512'});
        res.status(201).send({access_token: token});
    } catch (err) {
        res.status(500).send({errors: err});
    }
};

exports.resetRefreshSecret = (req, res) => {
    try {
        config.initRefreshSecret();
        res.status(204).send({});
    }catch (err) {
        res.status(500).send({errors: err});
    }
};