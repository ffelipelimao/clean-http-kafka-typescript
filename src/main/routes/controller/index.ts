import { Router } from 'express';
import { adaptRoute } from '../../adapter/adapter-express';
import { makeController } from '../../factories/make-controller';

export const controllerRouter = () => {
    const router = Router();

    router.get('/controller', adaptRoute(makeController()));

    return router;
};
