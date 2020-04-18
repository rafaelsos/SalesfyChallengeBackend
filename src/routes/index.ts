import { Router } from 'express';
import translateRouter from './translate.route';

const routes = Router();

routes.use('/translate', translateRouter);

export default routes;
