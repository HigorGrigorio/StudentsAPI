import multer, { MulterError } from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  /**
  *
  * @param {Request} req
  * @param {Express.Multer.File} file
  * @param {import('multer').FileFilterCallback} cb
  */
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg') {
      console.log(file.mimetype);
      return cb(new MulterError('Invalid file type. Must be jpeg, png or jpg file.'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    /**
    *
    * @param {Request} req
    * @param {Express.Multer.File} file
    * @param {import('multer').FileFilterCallback} cb
    */
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'dist', 'uploads', 'images'));
    },
    /**
    *
    * @param {Request} req
    * @param {Express.Multer.File} file
    * @param {import('multer').FileFilterCallback} cb
    */
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),

};
