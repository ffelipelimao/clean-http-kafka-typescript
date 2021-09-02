import { EachMessagePayload } from 'kafkajs';
import { IConsumer } from '../../domain/usecases/consumer';

export const adaptConsumerKafka =
    (consumer: IConsumer) => async (data: EachMessagePayload) => {
        const { message } = data;
        const { value } = message;

        const params = {
            message: value,
        };

        return consumer.handle(params);
    };
