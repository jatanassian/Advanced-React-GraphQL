require('dotenv').config({ path: 'variables.env' });
const createServer = require('createServer');
const db = require('./db');

const server = createServer();

// TODO Use express middleware to handle cookies (JWT)
// TODO Use express middleware to populate current user

server.start(
  {
    // Make sure that the endpoint can only be used by our approved URLs
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  }, deets => {
    console.log(`Server is now running on port http://localhost:${process.env.PORT}`)
  }
);