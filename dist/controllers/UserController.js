"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async index(req, res) {
    const users = await _User2.default.findAll({ attributes: ['id', 'name', 'surname', 'email'] });
    console.log(req.user);

    return res.json({ users });
  }

  async store(req, res) {
    try {
      const users = await _User2.default.create(req.body);

      const {
        id, name, surname, email,
      } = users;

      return res.json({
        id, name, surname, email,
      });
    } catch (err) {
      return res.status(400).json(err.errors.map((e) => e.message));
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const users = await _User2.default.findByPk(id);

      return res.json({ users });
    } catch (err) {
      return res.status(400).json(err.errors.map((e) => e.message));
    }
  }

  async update(req, res) {
    try {
      const { id } = req.user;

      if (!id) {
        return res.status(400).json({
          errors: ['invalid ID'],
        });
      }

      const users = await _User2.default.findByPk(id);

      if (!users) {
        return res.status(400).json({
          errors: ['user not found'],
        });
      }

      const newData = await users.update(req.body);

      return res.json({ users: newData });
    } catch (err) {
      return res.status(400).json(err.errors.map((e) => e.message));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.user;

      if (!id) {
        return res.status(400).json({
          errors: ['invalid ID'],
        });
      }

      const users = await _User2.default.findByPk(id);

      if (!users) {
        return res.status(400).json({
          errors: ['user not found'],
        });
      }

      await users.destroy();

      return res.json({ users });
    } catch (err) {
      return res.status(400).json(err.errors.map((e) => e.message));
    }
  }
}

exports. default = new UserController();
