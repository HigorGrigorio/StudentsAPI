import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();

class TokenController {
  /**
   *  return a array with all students registered on database
   *
   * @param {Request} req
   * @param {Request} res
   * @returns
   */
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['invalid credentials'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ['user not found'],
        });
      }

      if (!(await user.comparePassword(password))) {
        return res.status(401).json({
          errors: ['password mismatch'],
        });
      }
      const { id } = user;
      const token = jwt.sign(
        { id, email },
        process.env.TOKEN_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRATION },
      );

      return res.json({ token });
    } catch (err) {
      return res.status(400).json(err.errors.map((e) => e.message));
    }
  }
}

export default new TokenController();
