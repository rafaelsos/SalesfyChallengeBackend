import { Router } from 'express';
import translateRouter from './translate.route';

const routes = Router();

routes.use('/translate/:id', translateRouter);

export default routes;
