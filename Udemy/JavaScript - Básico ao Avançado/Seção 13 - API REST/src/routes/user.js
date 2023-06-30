import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

/*
  routes.get('/', userController.index);
  routes.get('/:id', userController.show);
*/
routes.post('/', userController.create);
routes.put('/', loginRequired, userController.update);
routes.delete('/', loginRequired, userController.delete);

export default routes;
