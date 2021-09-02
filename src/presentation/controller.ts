import { IController } from '../domain/protocols/controller';
import { HttpRequest, HttpResponse } from '../domain/protocols/http';
import { ok } from '../helpers/http-helpers';

export class Controller implements IController {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        return ok({ message: httpRequest.body });
    }
}
