import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),
};
