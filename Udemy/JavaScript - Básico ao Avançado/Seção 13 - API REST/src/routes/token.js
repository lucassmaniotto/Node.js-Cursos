import { Router } from 'express';
import tokenController from '../controllers/Token';

const routes = new Router();

routes.post('/', tokenController.store);

export default routes;
