import { Router } from 'express';
import multer from 'multer';
import imageController from '../controllers/Image';
import multerConfig from '../config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/', upload.single('poster'), imageController.create);

export default routes;
