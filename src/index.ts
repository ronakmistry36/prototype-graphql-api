import express from 'express';
import dotenv from 'dotenv';

// Configuration
dotenv.config();
const app = express();

export const {
  PORT,
  DATABASE_NAME, 
  DATABASE_USER_NAME, 
  DATABASE_PASSWORD, 
  DATABASE_HOTS, 
  DATABASE_PORT, 
  DATABASE_DIALECT 
} = process.env;

app.listen(PORT, () => {});

app.get('/', (request, response) => {
  response.send('HMW - Backend');
});
