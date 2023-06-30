import { Router } from 'express';
import movieController from '../controllers/Movie';

const routes = new Router();

routes.get('/', movieController.index);

export default routes;
