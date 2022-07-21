"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

const upload = _multer2.default.call(void 0, _multer4.default).single('archive');

class PhotoController {
  /**
   * @param {Request} req
   * @param {Request} res
   */
  store(req, res) {
    return upload(req, res, async (e) => {
      if (e) {
        return res.status(400).json({
          errors: [e.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { studentId } = req.body;
        const photo = await _Photo2.default.create({ originalname, filename, student_id: studentId });

        return res.json(photo);
      } catch (err) {
        return res.status(400).json({
          errors: ['user not found', err.message],
        });
      }
    });
  }
}

exports. default = new PhotoController();
