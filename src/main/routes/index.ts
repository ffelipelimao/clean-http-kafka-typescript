import { Express } from 'express';
import { controllerRouter } from './controller';

export default (app: Express): void => {
    app.use('/v1', controllerRouter());
};
