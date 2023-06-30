import { Router } from 'express';
import fileController from '../controllers/File';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.post('/', loginRequired, fileController.create);

export default routes;
