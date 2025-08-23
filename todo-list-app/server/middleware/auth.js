const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const jwt = require("jsonwebtoken");
const { findUserById } = require("../services/users");
const { createRequestContext } = require("../utils/context");

const { JWT_SECRET } = process.env;

const strategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
  },
  async (jwtPayload, done) => {
    try {
      const user = await findUserById(jwtPayload.id);

      if (!user) {
        const err = new Error("User not found");
        err.statusCode = 404;
        throw err;
      }

      done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

passport.use(strategy);

const initialize = () => {
  return passport.initialize();
};

const authenticate = () => {
  return (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info, status) => {
      if (user) {
        createRequestContext(user, () => next());
      }
    })(req, res, next);
  }
};

module.exports = {
  initialize,
  authenticate
};