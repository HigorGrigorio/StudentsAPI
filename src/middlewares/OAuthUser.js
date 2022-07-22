import jwt from 'jsonwebtoken';
import User from '../models/User';

/**
 * @param {Request} req
 * @param {Request} res
 * @param {Request} next
*/
export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errros: ['login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await User.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({
        errors: ['user not found'],
      });
    }

    req.user = {
      id,
      email,
    };

    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['invalid token'],
    });
  }
};
