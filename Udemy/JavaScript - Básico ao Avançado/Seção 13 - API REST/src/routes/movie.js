import { Router } from 'express';
import movieController from '../controllers/Movie';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.get('/', movieController.index);
routes.get('/:id', movieController.show);
routes.post('/', loginRequired, movieController.create);
routes.put('/:id', loginRequired, movieController.update);
routes.delete('/:id', loginRequired, movieController.delete);

export default routes;
