import { Router } from 'express';
import imageController from '../controllers/Image';

const routes = new Router();

routes.post('/', imageController.create);

export default routes;
