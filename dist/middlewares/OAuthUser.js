"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

/**
 * @param {Request} req
 * @param {Request} res
 * @param {Request} next
*/
exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errros: ['login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await _User2.default.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({
        errros: ['user not found'],
      });
    }

    req.user = {
      id,
      email,
    };

    return next();
  } catch (err) {
    return res.status(401).json({
      errros: ['invalid token'],
    });
  }
};
