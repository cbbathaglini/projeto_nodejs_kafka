const { sendMessage } = require('./producer');
const { startConsumer } = require('./consumer');

const run = async () => {
  try {
    // Start the consumer
    startConsumer();

    // Send a test message
    await sendMessage('Hello, Kafka!');

    // Send more messages for testing
    setInterval(async () => {
      const randomMessage = `Random message: ${Math.random()}`;
      await sendMessage(randomMessage);
    }, 5000);
    
  } catch (error) {
    console.error('Error in Kafka application:', error);
  }
};

run();
