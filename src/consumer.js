const { Kafka } = require('kafkajs');
const { kafka, topic } = require('./config');

const kafkaClient = new Kafka(kafka);
const consumer = kafkaClient.consumer({ groupId: 'nodejs-group' });

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()} from topic "${topic}"`);
    },
  });
};

module.exports = { startConsumer };
