import { Consumer, Kafka } from 'kafkajs';
import { adaptConsumerKafka } from '../../adapter/adapter-message-kafka';
import { makeConsumer } from '../../factories/make-consumer';

export const connectKafkaConsumerAndProducer = async () => {
    const kafka: Kafka = new Kafka({
        clientId: 'app-name',
        brokers: ['kafka:9092'],
    });

    const consumer: Consumer = kafka.consumer({
        groupId: 'app-name',
    });
    await consumer.connect();

    await consumer.subscribe({ topic: 'tp.name', fromBeginning: true });
    await consumer.run({
        eachMessage: adaptConsumerKafka(makeConsumer()),
    });
};
