import express from 'express';
import dotenv from 'dotenv';
import triggerConnection from './typeORM/index';

dotenv.config();
const app = express();

const { PORT } = process.env;

app.listen(PORT,   () => {
  triggerConnection();
  console.log("App is running on port::", PORT)
});

app.get('/', (request, response) => {
  response.send('HMW - Backend');
});
