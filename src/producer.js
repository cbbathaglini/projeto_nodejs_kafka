const { Kafka } = require('kafkajs');
const { kafka, topic } = require('./config');

const kafkaClient = new Kafka(kafka);
const producer = kafkaClient.producer();

const sendMessage = async (message) => {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: message }],
  });
  console.log(`Message sent to topic "${topic}": ${message}`);
};

module.exports = { sendMessage };
