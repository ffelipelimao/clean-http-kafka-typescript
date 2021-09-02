import { connectKafkaConsumerAndProducer } from './kafka-connect';

export const connectKafka = async () => {
    const NODE_ENV = process.env.NODE_ENV || '';
    if (NODE_ENV !== 'test') {
        await connectKafkaConsumerAndProducer();
    }
};
