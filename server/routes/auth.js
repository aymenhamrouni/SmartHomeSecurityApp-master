const IdentityChecker = require('../security/authentication/identity.checker');
const Authenticator = require('../security/authentication/authentication.handler');
const Validator = require('../security/authorization/authorization.validation');
const Authorization = require('../security/authorization/authorization.permission');
const config = require('../env.config');

const Master = config.permissionLevels.Master;
//const Member = config.permissionLevels.Member; //uncomment if needed
//const Surfer = config.permissionLevels.Surfer; //uncomment if needed

exports.routesConfig = function (app) {
    app.post('/auth', [
        IdentityChecker.hasAuthValidFields,
        IdentityChecker.isPasswordAndUserMatch
  
    ]);

    app.post('/auth/refresh', [
        Validator.validJWTNeeded,
        Validator.verifyRefreshBodyField,
        Validator.validRefreshNeeded,
        IdentityChecker.isUserStillExistsWithSamePrivileges,
        Authenticator.refresh_token
    ]);

    app.put('/auth/revokeIssuedRefreshTokens',[
        Validator.validJWTNeeded,
        Authorization.minimumPermissionLevelRequired(Master),
        Authenticator.resetRefreshSecret
    ]);
};