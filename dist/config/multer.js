"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const random = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  /**
  *
  * @param {Request} req
  * @param {Express.Multer.File} file
  * @param {import('multer').FileFilterCallback} cb
  */
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg') {
      console.log(file.mimetype);
      return cb(new (0, _multer.MulterError)('Invalid file type. Must be jpeg, png or jpg file.'));
    }

    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    /**
    *
    * @param {Request} req
    * @param {Express.Multer.File} file
    * @param {import('multer').FileFilterCallback} cb
    */
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'src', 'uploads', 'images'));
    },
    /**
    *
    * @param {Request} req
    * @param {Express.Multer.File} file
    * @param {import('multer').FileFilterCallback} cb
    */
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),

};
