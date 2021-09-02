import { IConsumer } from '../../domain/usecases/consumer';

export class Consumer implements IConsumer {
    async handle(params: IConsumer.Params): Promise<void> {
        console.log(`Message: ${params}`);
    }
}
