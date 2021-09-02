import { Request, Response } from 'express';
import { IController } from '../../domain/protocols/controller';

export const adaptRoute = (controller: IController) => {
    return async (req: Request, res: Response) => {
        try {
            const httpResponse = await controller.handle({
                body: req.body,
                params: req.query,
            });
            if (
                httpResponse.statusCode >= 200 &&
                httpResponse.statusCode <= 299
            ) {
                res.status(httpResponse.statusCode).json(httpResponse.body);
            } else {
                res.status(httpResponse.statusCode).json({
                    error: httpResponse.body.message,
                });
            }
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
};
