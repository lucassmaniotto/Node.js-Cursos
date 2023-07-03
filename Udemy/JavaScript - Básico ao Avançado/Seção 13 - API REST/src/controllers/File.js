import multer from 'multer';
import multerConfig from '../config/multer';
import File from '../models/File';

const upload = multer(multerConfig).single('file');
class FileController {
  create(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({ errors: [error.code] });
      }
      try {
        const { originalname, filename } = req.file;
        const { movie_id } = req.body;
        const file = await File.create({ originalname, filename, movie_id });
        return res.json(file);
      } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') {
          return res.status(400).json({ errors: ['File already exists'] });
        }
        return res.status(400).json({ errors: [e.message] });
      }
    });
  }
}

export default new FileController();
