"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);

class StudentController {
  /**
   *  return a array with all students registered on database
   *
   * @param {Request} _req
   * @param {Request} res
   * @returns
   */
  async index(_req, res) {
    const students = await _Student2.default.findAll({
      attributes: [
        'id', 'name', 'surname', 'email', 'age',
      ],
      order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
      include: [{
        model: _Photo2.default,
        attributes: ['id', 'url'],
      }],
    });

    return res.json({ students });
  }

  /**
   *  add a new student
   *
   * @param {Request} req
   * @param {Request} res
   */
  async store(req, res) {
    try {
      const students = await _Student2.default.create(req.body);

      res.json({ students });
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  /**
   *  return the students that haves a id passed in params
   *
   * @param {Request} req
   * @param {Request} res
   */
  async show(req, res) {
    try {
      const { id } = req.params;
      const students = await _Student2.default.findByPk(id, {
        attributes: [
          'id', 'name', 'surname', 'email', 'age',
        ],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: [{
          model: _Photo2.default,
          attributes: ['filename'],
        }],
      });

      return res.json({ students });
    } catch (err) {
      return res.status(400).json(err.errors.map((e) => e.message));
    }
  }

  /**
   *
   * @param {Request} req
   * @param {Request} res
   */
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['invalid ID'],
        });
      }

      const students = await _Student2.default.findByPk(id);

      if (!students) {
        return res.status(400).json({
          errors: ['user not found'],
        });
      }

      const newData = await students.update(req.body);

      return res.json({ students: newData });
    } catch (err) {
      return res.status(400).json(err.errors.map((e) => e.message));
    }
  }

  /**
  *
  * @param {Request} req
  * @param {Request} res
  */
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['invalid ID'],
        });
      }

      const students = await _Student2.default.findByPk(id);

      if (!students) {
        return res.status(400).json({
          errors: ['user not found'],
        });
      }

      await students.destroy();

      return res.json({ students });
    } catch (err) {
      return res.status(400).json(err.errors.map((e) => e.message));
    }
  }
}

exports. default = new StudentController();
