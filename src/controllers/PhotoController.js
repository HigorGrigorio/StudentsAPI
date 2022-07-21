import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('archive');

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
        const photo = await Photo.create({ originalname, filename, student_id: studentId });

        return res.json(photo);
      } catch (err) {
        return res.status(400).json({
          errors: ['user not found', err.message],
        });
      }
    });
  }
}

export default new PhotoController();
